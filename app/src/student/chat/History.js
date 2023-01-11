import React from "react";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import {
  Container,
  Divider,
  Paper,
  Grid,
  Typography,
  List,
} from "@mui/material";

import { Button } from "@mui/material";

export default function History({
  handleChatPerson,
}: {
  handleChatPerson: Function,
}) {
  const [admin] = useState("Admin");
  const [teacher] = useState("Teacher");

  return (
    <Fragment>
      <Container sx={{ width: "600px" }}>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              My chats
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="left">
              <Grid item xs={5} sx={{ height: "10rem", width: "10rem" }}>
                <List sx={{ height: "8rem", overflow: "auto" }}>
                  <Button
                    onClick={() => {
                      handleChatPerson(admin);
                    }}
                  >
                    {" "}
                    {admin}
                  </Button>
                  <Button
                    onClick={() => {
                      handleChatPerson(teacher);
                    }}
                  >
                    {teacher}
                  </Button>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}
