import { Box, Typography } from "@mui/material";
import React from "react";

const NewsFeed = () => {
  return (
    <Box>
      {samplePostData.map((post: any, index: number) => (
        <Box
          key={index}
          className="flex flex-column"
          sx={{
            borderRadius: 3,
            border: "1px solid #fff",
            mb: 2,
          }}
        >
          <Box
            className="flex align-center"
            sx={{ gap: 1, mb: 2, px: 3, pt: 2 }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px solid #fff",
              }}
            >
              <img src={"post?.ownerLogo"} alt="p" />
            </Box>
            <Typography>{post?.ownerName}</Typography>
          </Box>
          <Box sx={{ pl: 4, pr: 2 }}>
            <Typography>{post?.description}</Typography>
          </Box>
          <Box sx={{ pl: 4, pr: 2, pt: 2 }}>
            {post?.type === "img" ? (
              <img src={"post?.img"} alt="" />
            ) : (
              <Typography>{post?.data}</Typography>
            )}
          </Box>
          <Box sx={{ borderTop: "1px solid #5C5C5C", mt: 2, py: 3 }}>
            <Typography sx={{ pl: 4, pr: 2 }}>
              Likes{" "}
              <span
                style={{
                  background: "0669F8",
                  padding: "6px",
                  borderRadius: "50%",
                }}
              >
                {post?.likes}
              </span>
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewsFeed;
const samplePostData = [
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
  {
    ownerName: "Nikhil",
    ownerLogo: "N",
    description: "Contrary to popular belief, Lorem Ips",
    type: "text",
    data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po",
    likes: 2,
  },
];
