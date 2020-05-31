type ActionType = {
    type:
      | "INIT_DATA"
      | "NEXT_MUSICIANS"
      | "TOGGLE_LIKE"
      | "SELECT_SONG"
      | "PLAY_SONG"
      | "STOP_SONG";
    payload?: any;
  };
  
  interface Song {
    id: string;
    title: string;
    date: string;
    isPlaying: boolean;
    isLike: boolean;
    cover_url: string;
    song_url: string;
  }
  
  interface Musician {
    id: string;
    name: string;
    introduction: string;
    tags: string[];
    likes: number;
    profile_url: string;
    features: string[];
    song: Song;
  }
  
  interface MusicianList {
    list: Musician[];
    display: Musician[];
    page: number;
    end: number;
  }
  
  interface UserInfo {
    name : string;
    email : string;
  }
  
  interface ReqList {
    name : string;
    enrollDate : string;
    forUse : string;
    genre : string;
    atmo : string;
    length : string;
    finalDate : string;
    pay : string;
  }
  
  interface Before {
    id : string;
    profile_url : string;
    name : string;
    enrollDate : string;
    status : string;
    features: string[];
  }
  
  interface BeforeList {
    list: Before[];
    display: Before[];
    page: number;
    end: number;
  }
  
  interface UserData {
    musicianList : MusicianList;
    userInfo : UserInfo;
    reqList : ReqList;
    beforeList : BeforeList;
  }
  const reducer = (userData: UserData, { type, payload }: ActionType) => {
    switch (type) {
      case "INIT_DATA":
        const musicianInit = userData.musicianList;
        const beforeInit = userData.beforeList;

        musicianInit.list = [...payload.defaultMusicianList];
        musicianInit.display = payload.defaultMusicianList.slice(0, 4);
        musicianInit.page = 0;
        musicianInit.end = payload.defaultMusicianList.length;

        
        beforeInit.list = [...payload.defaultBeforeList];
        beforeInit.display = payload.defaultBeforeList.slice(0, 4);
        beforeInit.page = 0;
        beforeInit.end = payload.defaultBeforeList.length;
        return {
          musicianList : musicianInit,
          beforeList : beforeInit
        };
      case "NEXT_MUSICIANS":
        const nextPage = userData.musicianList.page + 4;
        if (nextPage > userData.musicianList.end) return userData.musicianList;
        else {
            let newDisplay = [...userData.musicianList.display, ...userData.musicianList.list.slice(nextPage, nextPage + 4) ];
            const musicianNext = userData.musicianList;
            musicianNext.list = userData.musicianList.list;
            musicianNext.page = nextPage;
            musicianNext.display = newDisplay;
            musicianNext.end = userData.musicianList.end;  
            return {
              musicianList : musicianNext
            };
        };
      case "TOGGLE_LIKE":
        // 미정입니다.
        
      case "SELECT_SONG":
        const newList = userData.musicianList.list.map((musician) => {
          musician.song.isPlaying =
            musician.song.id === payload.id ? payload.status : false;
          return musician;
        });

        const musicianSelect = userData.musicianList;
        musicianSelect.list = newList;
        musicianSelect.display = newList.slice(userData.musicianList.page, userData.musicianList.page + 4);
        return {
          musicianList : musicianSelect
        };
      case "PLAY_SONG":
        return;
      case "STOP_SONG":
        return;

      default:
        return;
    }
  };
  
  export default reducer;
  