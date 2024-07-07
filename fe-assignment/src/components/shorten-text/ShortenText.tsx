import { useEffect, useRef, useState } from 'react';

import { Tooltip, TooltipProps, Typography, TypographyProps } from '@mui/material';

export type ShortenTextProps = TypographyProps & {
  /**
   * Number of rows to be displayed.
   */
  rows?: 1 | 2 | 3 | 4;
  /**
   * Placement of the tooltip.
   */
  tooltipPlacement?: TooltipProps['placement'];
};

/**
 * The `ShortenText` displays a number of content rows. If the content rows are greater than the displayed rows, it will show an ellipsis and a tooltip.
 *
 ```typescript
import ShortenText from 'src/components/ShortenText'
 ```
*/
const ShortenText = (props: ShortenTextProps) => {
  const { children, rows = 1, tooltipPlacement = 'top', sx, ...restProps } = props;

  const [showTooltip, setShowTooltip] = useState(false);

  const typoRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setShowTooltip((typoRef.current?.clientHeight || 0) < (typoRef.current?.scrollHeight || 0));
  }, [children]);

  return (
    <Tooltip arrow title={showTooltip ? children : ''} placement={tooltipPlacement}>
      <Typography
        ref={typoRef}
        sx={{
          ...sx,
          overflow: 'hidden',
          WebkitLineClamp: rows,
          WebkitBoxOrient: 'vertical',
          display: '-webkit-box',
        }}
        {...restProps}
      >
        {children}
      </Typography>
    </Tooltip>
  );
};

export default ShortenText;
