import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DragContainer = styled(motion.div)`
  position: absolute;
  top: 0;

  z-index: 1;

  border-radius: 9px 9px 0 0;

  width: 100%;
  height: 30px;
`
