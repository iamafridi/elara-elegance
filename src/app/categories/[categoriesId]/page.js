import { getCategoryNews } from "@/utils/getAllCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const DynamicClothPage = async ({ params, seachParams }) => {
  const { data } = await getCategoryNews(seachParams.category);

  return (
    <div className="my-5">
      <h1>
        Total {seachParams.category} news : {data.length}
      </h1>
      {/* Grid  */}
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={news.thumbnail_url}
                    width={800}
                    height={100}
                    alt="Latest Fashion"
                  />
                </CardMedia>
                <CardContent>
                  <p className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
                    {news.category}
                  </p>
                  <Typography gutterBottom>{news.title}</Typography>
                  <Typography gutterBottom className="my-3">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicClothPage;
