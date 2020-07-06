import {useEffect, useReducer} from "react";
import mitt from "mitt";
import {isObject} from "lodash-es";


/**
 * State Store Class
 * This Class provides functions of store of accessing and pub/sub
 *
 * @param initState
 * @constructor
 */
const ZStateStore = (function () {
  // initialize state id counter
  //   used to generate new state id
  let maxId = 1;

  // pub/sub manager
  const emitter = mitt();

  const updatedEventName = function (id) {
    return `s_${id}_updated`;
  };

  // check if the update values is equal to previous corresponding state value
  // Following situations will be considered as different
  //   1. update including array
  //   1. update is a plain object and has at least one element in deep different to state value
  //   1. update is simple type and different to state value
  const isEqualToState = (function () {

    // return function (update, state, options = {level: 1}) {
    return function (update, state) {
      // const level = options.level;
      // if (level < 1) return true;

      if (Array.isArray(update)) {
        // console.log(update, state)

        return false;
      }
      else if (!isObject(update)) {
        // console.log(update, state, update == state, typeof update, typeof state);

        return update === state;
      } else {
        if (!isObject(state)) return false;

        // const _level = level > 1 ? level - 1 : 0;
        for(let k in update) {
          if (update.hasOwnProperty(k)) {
            if (!state.hasOwnProperty(k)) return false;
            // if (state[k]) return false;
            if (!isEqualToState(update[k], state[k])) return false;
          }
        }
        // console.log(update, state)

        return true;
      }

    }
  })();


  function ZStateStore(initState) {
    // state id
    const _id = maxId++;

    // state's plain javascript object
    let _state = initState;


    this.get = function () {
      return _state;
    };

    this.update = function (update) {
      // if update is equal to state value, skip update
      //   @see isEqualToState() for situations considered difference
      if (isEqualToState(update, _state)) {
        // console.log('is equal');
        return;
      }

      // update state
      Object.assign(_state, update);

      // emit notification
      emitter.emit(updatedEventName(_id)); //, [_state, update])
    };

    this.subscribe = function (callback) {
      // listen state update event
      emitter.on(updatedEventName(_id), callback); //, [_state, update])

      return function () {
        // un-listen state update event
        emitter.off(updatedEventName(_id), callback);
      }
    };
  }

  return ZStateStore;
}());


/**
 * Generate a new state store
 * Use this function create stores for your app at first while using zstate library
 *
 * @param {any} initState inital state
 * @returns {*}
 */
export function zstate(initState) {
  return new ZStateStore(initState);
}

/**
 * React hook for accessing state in your react component
 *
 * Usage:
 *
 * // in store.js
 * export const userState = zstate({name: 'Jack', nick: 'Hero', hobby:['reading']})
 *
 * // in your component
 * import {userState} from "./store"
 * ...
 * const [user, updateUser] = useZState(store)
 * const name = user.name
 * updateUser({nick: 'Flower', hobby:['reading']})
 *
 *
 * @param {ZStateStore} stateStore
 * @returns {Array} [state, setter]
 */
export function useZState(stateStore) {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // const self = this;
  useEffect(() => {
    const unsubscribe = stateStore.subscribe(() => {
      forceUpdate() // force component update
    });
    return () => {
      unsubscribe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    // state's plain object,
    // NOTICE: DON'T mutate this object, use it readonly
    stateStore.get(),

    // state setter
    //   NOTICE: state setter doesn't notify the component before the first render
    stateStore.update.bind(stateStore)
  ];
}
