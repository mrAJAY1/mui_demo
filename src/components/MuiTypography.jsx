import { Typography } from "@mui/material";
import React from "react";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1"> h1 Heading</Typography>
      <Typography variant="h2"> h2 Heading</Typography>
      <Typography variant="h3"> h3 Heading</Typography>
      <Typography variant="h4"> h4 Heading</Typography>
      {/* component prop defines the element to be used. h4 is the default element used but it is div now */}
      <Typography variant="h5" component="div">
        h5 Heading
      </Typography>
      {/* gutterbottom adds margin bottom to the element */}
      <Typography variant="h6" gutterBottom>
        h6 Heading
      </Typography>

      {/* subtitle uses h6 element by default */}
      <Typography variant="subtitle1"> subtitle 1 </Typography>
      <Typography variant="subtitle2"> subtitle 2</Typography>

      {/* p is the default element for body variants */}
      <Typography variant="body1" gutterBottom>
        {/* body1 is the default variant for typography */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid quam, totam, tempore
        impedit obcaecati hic voluptatem ex, inventore eaque veritatis corrupti? Debitis, porro
        officia. Repudiandae quae incidunt commodi facere.
      </Typography>
      <Typography variant="body2" marginBottom="10px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora itaque fuga dolore
        dignissimos labore dolores similique, a animi sed exercitationem unde sequi ea. Tenetur quae
        veniam possimus corrupti ullam.
      </Typography>
    </div>
  );
}

export default MuiTypography;
