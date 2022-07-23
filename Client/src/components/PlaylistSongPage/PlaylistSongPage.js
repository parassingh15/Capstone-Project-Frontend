import React from 'react'
import './PlaylistSongPage.css'

import personalPlaylistImage from '../../img/personalplaylist.jpg'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from 'react-router-dom';

export default function PlaylistSongPage() {

    let { playlistName } = useParams();

  return (
    <div className='PlaylistSongPage'>
            <div className="LikedSongHead">
            <img className='playlistImg' src={personalPlaylistImage} alt="" />
            <h1 className='LikedName' style={{fontFamily: "Open Sans", fontSiz: "16px"}}>{playlistName}</h1>
        </div>
        <div className="liked-songs-lists">
        <List
         sx={{
          width: "98%",
          background: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)",
          borderRadius: "8px",
        }}>
        <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                
                  alt="Blinding Lights"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Blinding Lights"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Weeknd
                    </Typography>
                  </React.Fragment>
                }
              />
              <FavoriteIcon
                sx={{ marginRight: "20px", marginTop: "15px", color: "red" }}
              />
              <p style={{ marginRight: "20px", marginTop: "15px" }}> 3:12 </p>
              <MoreHorizIcon sx={{ marginRight: "20px", marginTop: "15px" }} />
            </ListItem>
          </List>
        </div>

        <div className="liked-songs-lists SongsList-Playlist">
        <List
         sx={{
          width: "98%",
          background: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)",
          borderRadius: "8px",
        }}>
        <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                
                  alt="Money"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Money"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Lisa
                    </Typography>
                  </React.Fragment>
                }
              />
              <FavoriteIcon
                sx={{ marginRight: "20px", marginTop: "15px", color: "red" }}
              />
              <p style={{ marginRight: "20px", marginTop: "15px" }}> 2:45 </p>
              <MoreHorizIcon sx={{ marginRight: "20px", marginTop: "15px" }} />
            </ListItem>
          </List>
        </div>
    </div>
  )
}
