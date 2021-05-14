// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';

// import { Container } from './style';

// export default function UploadImg() {
//   const [fileList, setFileList] = useState([]);

//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const onPreview = async (file) => {
//     let src = file.url;

//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }

//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow.document.write(image.outerHTML);
//   };

//   return (
//     <Container>
//       <ImgCrop rotate shape="round">
//         <Upload
//           action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//           listType="picture-card"
//           fileList={fileList}
//           onChange={onChange}
//           onPreview={onPreview}
//         >
//           {fileList.length < 4 && '+ Fotos'}
//         </Upload>
//       </ImgCrop>
//     </Container>
//   );
// }
