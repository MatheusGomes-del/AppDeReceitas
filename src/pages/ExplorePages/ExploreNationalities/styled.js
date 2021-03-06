import styled from 'styled-components';

const ExploreNation = styled.div`
display: grid;
grid: "header" 10vh
      "select" 10vh
      "content" 70vh
      "footer" 10vh
      / 1fr;
background-color: #EFEFEE;

header{
  grid-area: header;
  font-size: 80%;
}

select{
  grid-area: select;
  width: 337px;
  height: 47px;
  margin: 15px auto;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  background-color: black;
  color: #FAC267;

}

#recipe{
  grid-area: content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 15px;
  gap: 10px;
  overflow: auto;
  font-size: 80%;
}

footer{
  grid-area: footer;
}
`;

export default ExploreNation;
