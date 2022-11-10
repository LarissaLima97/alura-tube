import React from "react";
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const styleHomePage = { 
        //backgroundColor:"red"
     };
     const[filterValue, setFilterValue]  = React.useState("");
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,}}>
                {/* Prop Drilling */}
                <Menu filterValue={filterValue} setFilterValue={setFilterValue}/>
                <Header />
                <Timeline searchValue ={filterValue} playlists={config.playlists} />
            </div>
        </>
    );
  }
  
export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyleHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};
    .user-photo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div `
    background-color: blue;
    background-image: url(${({bg}) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;

`;

function Header() {
    return (
        <StyleHeader>
              <StyledBanner bg={config.bg}/>
            <section className="user-info">
                <img className="user-photo" src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyleHeader>
    )
}

function Timeline({searchValue, ...props}) {
    const playlistsNames = Object.keys(props.playlists)
    //Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos =  props.playlists[playlistName]
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video)=> {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                            })
                            .map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

