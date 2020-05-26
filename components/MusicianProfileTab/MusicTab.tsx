import * as React from "react";
import styled from "styled-components";
import MusicList from "./MusicList";

interface Props {}
const Container = styled.div`
  margin-right: 10rem;
`;

const MusicTab = (props: Props) => {
  const musicList = [
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
    {
      title: "글을 한 개의 칼럼에 넣는다.",
      album:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp",
      isPlaying: false,
    },
  ];
  return (
    <Container>
      <MusicList musicList={musicList} />
    </Container>
  );
};

export default MusicTab;
