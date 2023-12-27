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
import Link from "next/link";

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
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={100}
                      alt="Latest Fashion"
                    />
                  </CardMedia>
                  <CardContent>
                    <span className=" w-[80px] p-1 my-3 text-center rounded bg-red-300 text-black">
                      {news.category}
                    </span>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + " ..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicClothPage;
