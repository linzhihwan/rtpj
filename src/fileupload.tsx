import React, { useState } from "react";

function Fileupload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("파일을 선택하세요!");
      return;
    }
    // 서버로 업로드하는 경우 fetch/axios 사용
    const formData = new FormData();
    formData.append("file", file);
//upload http://localhost:8080/upload  , C:\\DTIT
    fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("업로드 성공!");
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
}

export default Fileupload;
