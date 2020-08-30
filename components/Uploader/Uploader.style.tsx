import styled from 'styled-components';
import { colors } from 'theme/colors';
import { makeStyles } from "@material-ui/core/styles";

export const Text = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: '1rem;
  font-weight: "400";
  color: ${colors.primary};
  margin-top: 15px;
  text-align: center;
`;

export const TextHighlighted = styled.span`
  color: ${colors.primary};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contnet=center;
  background-color:"red";
  padding: 50px 30px;
  border: 2px dashed ${colors.primary};
  background-color: #ffffff;
  color: #bdbdbd;
  outline: none;
  cursor: pointer;
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Thumb = styled.div`
  border: 1px solid ${colors.lightGrey};
  display: inline-flex;
  border-radius: 2px;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "40rem",
    height: "31rem",
    padding: "2rem 2rem",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      height: "85vh",
    },
  },

  container:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContnet:'center',
    padding: '.5rem 1rem .5rem 1rem',
    backgroundColor: `${colors.lightColor}`,
    // color: '#bdbdbd',
    color: 'black',
    fontSize:".9rem",
    outline: 'none',
    cursor: 'pointer',
    border: `1.5px dashed ${colors.darkLight}`,
    [theme.breakpoints.down("xs")]: {
      padding: '.2rem',
    },
  }
}));