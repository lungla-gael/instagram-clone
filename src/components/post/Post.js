import "./Post.css"
import { Avatar, IconButton } from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Post = ({ username, caption, imageSrc }) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar 
                    className="post_avatar"
                    alt="Gael"
                    src={imageSrc}
                />
                <h3>{username}</h3>
                <IconButton>
                    <MoreHorizIcon className="dot"/>
                </IconButton>
            </div>
            <img className="post_image" src={imageSrc}/>
            <h4 className="post_text"><strong>{username}</strong>{caption}</h4>
        </div>
    )
}

export default Post
