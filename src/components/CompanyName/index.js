import styled from 'styled-components';
import variables from 'theme/variables';

const CompanyName = styled.div`
  font-size: 16px;
  flex-grow: 1;
  line-height: ${variables.header.height};
  text-align: left;
  padding-left: 26px;
  font-weight: 300;
  text-transform: uppercase;
`

export default CompanyName;
