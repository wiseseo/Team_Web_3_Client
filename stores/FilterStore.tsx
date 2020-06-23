import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface MusicianList {}
interface Filter {
  atmoList: Array<string>;
  genreList: Array<string>;
  instruList: Array<string>;
  themeList: Array<string>;
}

const defaultFilter: Filter = {
  atmoList: [],
  genreList: [],
  instruList: [],
  themeList: [],
};

interface FilterInterface {
  filter: Filter;
  setFilter?: Function;
  musicianList: MuscianList;
}
export const FilterContext = React.createContext<FilterInterface>({
  filter: defaultFilter,
  musicianList: [],
});

const useLoad = (callback: Function, filter: Filter) => {
  const [loading, setLoading] = useState(false);

  const loadInitData = async (callback: Function, filter: Filter) => {
    setLoading(true);
    const response: AxiosResponse = await axios.get(
      "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musicians/curation",
      {
        params: { ...filter },
      }
    );
    if (response.data) {
      const responseData: MusicianList = response.data;
      callback(responseData);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitData(callback, filter);
  }, [filter]);
  return loading;
};

const FilterStore = ({ children }: { children: React.ReactElement }) => {
  const [filter, setFilter] = useState<Filter>();
  const [musicianList, setMusicianList] = useState<MusicianList>();
  useLoad((responseData: MusicianList) => {
    setMusicianList(responseData);
  }, filter);
  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        musicianList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterStore;
