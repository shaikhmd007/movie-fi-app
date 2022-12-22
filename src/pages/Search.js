import { omdb } from "../utils";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SingleSearchCard from "../components/SingleSearchCard";
import { Box, Stack, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
//  Added loader while data is fetching
import Loader from "../components/Loader";

const Search = (_) => {
  const [list, setList] = useState([]);
  // used hook of of checking params and serched on key Enter
  const [params] = useSearchParams();
  //👇🏻 By using this state we can see the total records and data we get 
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();

  useEffect(

    // checking the Query is valid or using params 
    (_) => {
      if (params.has("q") && params.get("q") !== "") {
        setList([]);
      }
    },
    [params]
  );


  // Loading data functions and load more 
  const loadData = () => {
    (async (_) => {
      const pageNo = Math.floor(list.length / 10) + 1;
      const response = await omdb.get(`?s=${params.get("q")}&page=${pageNo}`);

      if (response.data.Response === "False") {
        if (pageNo === 1) {
          navigate("/404");
        } else {
          return;
        }
      }

      setTotalRecords(response.data.totalResults);
      setList((orignalList) => {
        return [...orignalList, ...response.data.Search];
      });
    })();
  };

  return (
    <>
      <Box p={5}>
        <Typography
          variant="h6"
          backgroundColor="#594756 "
          color="white"
          pl={1}
        >
          {totalRecords} results found
        </Typography>

        <InfiniteScroll
          pageStart={1}
          loadMore={loadData}
          hasMore={totalRecords === 0 || list.length < totalRecords}
          loader={<Loader key={0} />}
        >
          <Stack spacing={3} mt={1} mb={3}>
            {list.map((e, idx) => {
              return <SingleSearchCard data={e} key={idx} />;
            })}
          </Stack>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default Search;
