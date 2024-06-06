import profilePic from '../assets/profilePic.jpeg'
export default function Profile() {
    return (
    <div>
        <div className = "profilePicBanner">
            <img style = {{height : '320px'}}src={profilePic} alt="profilePic" />
        </div>
        <div className = "profileInfo">
            <h1>Himral Garg</h1>
            <h2>20</h2>
            <h3>Noida</h3>
        </div>
        <hr></hr>
        <div className = "thirdPartProfile">
            <div className = "thirdPartProfileInnerEl">
                <b>80K</b>
                <h3>Followers</h3>
            </div>
            <div className = "thirdPartProfileInnerEl">
                <b>803K</b>
                <h3>Likes</h3>
            </div>
            <div className = "thirdPartProfileInnerEl">
                <b>1.4K</b>
                <h3>Photos</h3>
            </div>
        </div>
    </div>)
}