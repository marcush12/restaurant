import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iure facilis tempora sint excepturi aut dolorem illo voluptatem nihil beatae doloribus esse consequuntur recusandae explicabo iusto eligendi iste totam non eos enim delectus, doloremque accusamus! Assumenda, odio doloribus. Magnam officiis labore in animi deserunt accusantium illum, quod rem ullam similique?</p>
          <Link to='/about/' style={
            // javascript notation!
            {textDecoration:'none'}}>
            <SectionButton style={{margin:'2rem auto'}}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
width: 90%;
margin: 2rem auto;
.text{
  line-height:2rem;
  color: ${styles.colors.mainGrey};
  word-spacing: .2rem;
}
@media (min-width:768px){
  width: 70%;
}
@media (min-width:992px){
  width: 60%;
}
`
