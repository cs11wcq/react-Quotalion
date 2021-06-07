import React, { useRef } from 'react'
import S3 from 'react-aws-s3'

function Upload() {
  const fileInput = useRef()
  const handleClick = (event) => {
    event.preventDefault()
    let file = fileInput.current.files[0]
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, '')
    console.log(file, newFileName);
    const config = {
      bucketName: 'backup-backup-bucket',
      region: 'us-east-1',
      accessKeyId: 'AKIA247FC4WGRRSBJ2UL',
      secretAccessKey: '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',
      s3Url: 'https://backup-backup-bucket.s3.us-east-1.amazonaws.com/',
    }
    const ReactS3Client = new S3(config)
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data)
      if (data.status === 204) {
        console.log('success')
      } else {
        console.log('fail')
      }
    })
  }
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>
          Upload file:
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}

export default Upload
