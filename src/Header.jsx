import { Stack, Typography, Button, ButtonGroup } from "@mui/material";

export const Header = ({setMagnitude, setTime}) => (
  <div className="header">
    <header>
      <Typography
        sx={{ backgroundColor: "#eee333", color: "black", textAlign: "center" }}
        variant="h4"
      >
        IGEO Erdbebenmonitor
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => setMagnitude ("all")}>
          All
        </Button>
        <Button onClick={() => setMagnitude("1.0")}>
          M1.0+
        </Button>
        <Button onClick={() => setMagnitude("2.5")}>
          M2.5+
        </Button>
        <Button onClick={() => setMagnitude("4.5")}>
          M4.5+
        </Button>
        <Button onClick={() => setMagnitude("significant")}>
          Significant
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => setTime("hour")}>
          Past Hour
        </Button>
        <Button onClick={() => setTime("day")}>
          Past Day
        </Button>
        <Button onClick={() => setTime("week")}>
          Past Week
        </Button>
        <Button onClick={() => setTime("month")}>
          Past Month
        </Button>
      </ButtonGroup>
      </Stack>
    </header>
  </div>
);
