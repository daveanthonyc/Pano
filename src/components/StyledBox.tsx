import { Box } from '@mui/material'
import { ReactNode } from 'react'

function StyledBox({flex, justifyContent, alignItems, width, height, children}: {flex?: string, justifyContent?: string, alignItems?: string, width?: string, height?: string, children: ReactNode}) {
  return (
    <Box
        sx={{
            border: '1px solid',
            borderColor: 'border.main',
            borderRadius: '10px',
            display: `${flex}`,
            justifyContent: `${justifyContent}`,
            alignItems: `${alignItems}`,
            overflow: 'hidden',
            width: `${width}`,
            height: `${height}`,
        }}
    >{children}</Box>
  )
}

export default StyledBox;
