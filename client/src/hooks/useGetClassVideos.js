import React from 'react';

const useGetClassVideos = () => {
    const [videoList, setVideoList] = React.useState({});

    React.useEffect(() =>{
        
        async function fetchVideos() {
            const fullResponse = await fetch(`http://localhost:9000/resources/dashboard/class-videos?classname=${name}`)
            const response = await fullResponse.json();
            setVideoList(response.data);
            
        }
        fetchVideos();
   
      },[]);
      console.log("here's the video list");
      console.log(videoList);
      return [videoList];

};
export default useGetClassVideos;