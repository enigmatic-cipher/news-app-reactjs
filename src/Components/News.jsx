import React, { useEffect, useState } from "react";
import axios from "axios";
import Newscard from "./Newscard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function News() {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6c20d487b8ac475a954ef5436366f599"
    );
    setNews(response.data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={6}>
          {news.map((element) => {
            return (
              <Grid
                item
                key={element.url}
                xs={12}
                sm={6}
                md={4}
                style={{ display: "grid" }}
              >
                <Newscard
                  title={element.title}
                  image={element.urlToImage}
                  description={element.description}
                  web={element.url}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default News;
