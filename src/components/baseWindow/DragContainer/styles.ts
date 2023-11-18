import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DragContainer = styled(motion.div)`
  position: absolute;
  top: 0;

  border-radius: 18px 18px 0 0;

  z-index: 999;

  width: 100%;
  height: 30px;
`
