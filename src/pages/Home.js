import { useAuth } from 'hooks/useAuth';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Box = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(9 9 121);
`;

const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;

  color: rgb(9 9 121);
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    color: rgb(255 255 255);
  }
`;
const Section = styled.section`
  margin: ${props => props.margin || '40px 0 0 0'};
`;

const Title = styled.h1`
  margin: ${props => props.margin || '0 0 20px 0'};
  text-align: ${props => props.position || 'start-left'};
  font-size: ${props => props.size || '18px'};
  font-weight: 700;
  line-height: 1.33;
  color: rgb(9 9 121);
`;

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Section margin="calc(10%) 0 0 0">
        <Title size="30px" margin="0 0 20px 0" position="center">
          Welcome to the <br />
          <b> Phonebook</b> - Contacts manager
        </Title>
      </Section>
      {!isLoggedIn ? (
        <Box>
          <Text>
            Please <Link to="/login">log in</Link> to your account to view your
            contacts.
          </Text>
          <Text>
            If you are not registered yet, please{' '}
            <Link to="/register">register</Link>
          </Text>
        </Box>
      ) : (
        <Box>
          <Text>
            You can view <Link to="/contacts"> your contacts</Link>
          </Text>
        </Box>
      )}
      ;
    </>
  );
};

export default Home;
