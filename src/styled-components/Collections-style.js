import styled from 'styled-components'

const CollectionStyle = {};

CollectionStyle.Wrapper = styled.div`
padding-top: 75px;
padding-left: 36px;
padding-right: 36px;
width: 676px;
display: grid;
`;

CollectionStyle.CollectionsTitle = styled.div`
float: left;
font-family: 'DINPro-Medium';
font-size: 26px;
`

CollectionStyle.LineBreak = styled.hr`
display: block;
height: 1px;
border: 0;
margin: 1em 0;
margin-bottom: 25px;
padding: 0;
`;

CollectionStyle.CollectionContainer = styled.div`
display: inline-block;
`;

CollectionStyle.Collection = styled.span`
display:inline-block;
border-radius: 25px;
padding: 8px; 
text-align: center;
height: 15px;
width: fit-content;
margin-bottom: 10px;
margin-left: 8px;
margin-right: 8px;
font-family: 'DINPro-Medium';
font-size: 13px;
`;


export default CollectionStyle;