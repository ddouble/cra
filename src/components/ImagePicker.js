import React, {useEffect, useState} from "react";

/**
 * @return {null}
 */
export function ImagePicker(props) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const limit = 15;

  const fetchImages = async ({page, limit}) => {
    setLoading(true);
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`).then(r => {
      setLoading(false);
      return r.json();
    })
  };

  useEffect(() => {
    fetchImages({page, limit}).then(r => setImages(r))
  }, [page]);

  const onImageClick = (image) => (ev) => {
    if (props.onChange) {
      props.onChange(image)
    }
  };

  if (!props.open) return null;

  return <>
    <div style={{
      position: "absolute",
      background: '#000',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.5
    }} onClick={() => {
      if (props.onClose) props.onClose()
    }}>&nbsp;</div>
    <div>
      <div style={{
        position: 'absolute',
        border: '1px solid #ccc',
        background: '#fff',
        opacity: 1,
        boxShadow: '10px 10px 10px #333',
        width: '530px',
        height: '350px',
        overflow: "auto",
        top: '100px',
        left: '50%',
        marginLeft: '-250px',
        padding: '20px'
      }}>
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
          {images.map((image, i) =>
              <li key={image.id}
                  style={{float: 'left', marginLeft: '5px'}}>
                <img src={`https://picsum.photos/id/${image.id}/200`}
                     alt={''}
                     style={{width: '100px', height: '100px', cursor: 'pointer', background: '#eee'}}
                     onClick={onImageClick(image)}/></li>)}
        </ul>
        <div style={{
          position: "absolute",
          bottom: '5px',
          textAlign: 'center',
          width: '90%'
        }}>
          <button disabled={loading} style={{width: '50px', fontSize: '16px', margin: '10px'}} onClick={() => setPage(1)}> &lt;&lt; </button>
          <button disabled={loading} style={{width: '100px', fontSize: '16px', margin: '10px'}} onClick={() => setPage(page - 1)}> &lt; </button>
          <button disabled={loading} style={{width: '100px', fontSize: '16px'}} onClick={() => setPage(page + 1)}> &gt; </button>
        </div>
      </div>
    </div>
  </>
}
