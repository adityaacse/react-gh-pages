import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';



const VideoDetail = ({ video} ) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    TimeAgo.locale(en);
    const timeAgo = new TimeAgo('en-US');

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // const publishTime = `${timeAgo.format(new Date(video.snippet.publishedAt))}`;

    // console.log(new Date(video.snippet.publishedAt).toLocaleDateString('en-US', { timezone: 'UTC' }));

    const publishTime = video.snippet.publishedAt;
    console.log("New time ",publishTime);
    const timestamp = new Date(publishTime).getTime();
    const Day = new Date(publishTime).getDate();
    // const Month = new Date(publishTime).getMonth()+1;
    const Month = new Date(publishTime).toLocaleString('default', { month: 'short' });
    const Year = new Date(timestamp).getFullYear();
    const newDateFormat = `${Month} ${Day}, ${Year}`;    
    // console.log("timestamp ", timestamp);
    // console.log("Day ", Day);
    // console.log("Month ", Month);
    // console.log("Year ", Year);
    // console.log(newDateFormat);    
    return (
        <div>
            <div className='ui embed'>
                <iframe title="video source" src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{newDateFormat}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
    
};

export default VideoDetail;