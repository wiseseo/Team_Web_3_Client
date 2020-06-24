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
  atmoList: [""],
  genreList: [""],
  instruList: [""],
  themeList: [""],
};

interface FilterInterface {
  filter: Filter;
  setFilter?: Function;
  musicianList: MusicianList;
}
export const FilterContext = React.createContext<FilterInterface>({
  filter: defaultFilter,
  musicianList: [],
});

const isCategory = (filter: Filter): string => {
  let selectedIndex = Object.values(filter).findIndex(
    (value) => value.length === 0
  );
  switch (selectedIndex) {
    case 0:
      return "분위기";
    case 1:
      return "장르";
    case 2:
      return "악기";
    case 3:
      return "테마";
    case -1:
    default:
      return "";
  }
};

const useLoad = (callback: Function, filter: Filter) => {
  const [loading, setLoading] = useState(false);
  const loadInitData = async (callback: Function, filter: Filter) => {
    setLoading(true);
    console.log(filter);
    const selectedCategory = isCategory(filter);
    let response: AxiosResponse;
    if (selectedCategory) {
      response = await axios.get(
        "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/categorys",
        {
          params: {
            categoryNm: selectedCategory,
          },
        }
      );
    }
    response = await axios.post(
      "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musicians/curation",
      JSON.stringify({ ...filter }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.data) {
      console.log(response.data);
      const responseData: MusicianList = response.data;
      callback(responseData);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(filter);
    loadInitData(callback, filter);
  }, [filter]);
  return loading;
};

const FilterStore = ({ children }: { children: React.ReactElement }) => {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
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
