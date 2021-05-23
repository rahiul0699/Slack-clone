import React,{} from 'react'
import styled from 'styled-components'
import SidebarChannels from './SideBarChannels'

import SideBarOptions from './SideBarOptions'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const SideBarFooter=()=>{

    return (
        <Wrapper>
             <SideBarOptions Icon={InsertCommentIcon} title={"Threads"}/>
        <SideBarOptions Icon={InboxIcon} title={"Mentions & Reactions"}/>
        <SideBarOptions Icon={DraftsIcon} title={"Saved items"}/>
        <SideBarOptions Icon={BookmarkBorderIcon} title={"Channel browser"}/>
        <SideBarOptions Icon={PeopleIcon} title={"People & user groups"}/>
        <SideBarOptions Icon={AppsIcon} title={"Apps"}/>
        <SideBarOptions Icon={FileCopyIcon} title={"File browser"}/>
        <SideBarOptions Icon={ExpandLessIcon} title={"Show less"}/>
            <hr/> 
            <SideBarOptions Icon={ExpandMoreIcon} title={"Channels"}/>           
        <hr/>
    <SidebarChannels/>
        </Wrapper>
    )
}
const Wrapper = styled.div ` 
>hr 
{
    margin-top:10px;
    border:0.2px solid rgba(128, 128, 128, 0.76); 
    
   
}
`
export default SideBarFooter
