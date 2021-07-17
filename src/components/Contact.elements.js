import styled from 'styled-components'

export const ContactWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 1300px;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
@media screen and (max-width: 1100px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
}
`

export const SectionHeading = styled.p`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 2.2rem;
  color: #F1F1E6;
  justify-content: center;
  padding-bottom: 25px;
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
}
@media screen and (max-width: 375px) {
  font-size: 1.4rem;
}
`

export const BlueText = styled.span`
  font-weight: bold;
  font-size: 2.2rem;
  color: #00ADB5;
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
}
@media screen and (max-width: 375px) {
  font-size: 1.4rem;
}
`

export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
  padding: 20px;
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
}
`

export const InputWrapper = styled.div`
  width: 100%;
`

export const StyledLabel = styled.h1`
  font-weight: bold;
  padding-bottom: 10px;
  font-size: 1.6rem;
  color: #F1F1E6;
  margin-left: .3rem;
`

export const StyledInput = styled.input`
  width: 550px;
  height: 40px;
  padding: 0.85rem 0.85rem;
  border: 2px solid #00A5B4;
  border-radius: 100px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #F1F1E6;
  &:focus,
  &:active {
      box-shadow: #00A5B4 0px 0px 2px 1px,
        #00A5B4 0px 0px 0px 1px;
      outline: none;
    }
    ::placeholder {
    color: #8899A6;
  }
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 260px;
}
`

export const StyledArea = styled.textarea`
  width: 550px;
  max-width: 550px;
  padding: 0.85rem 0.85rem;
  border: 2px solid #00A5B4;
  border-radius: 30px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #00ADB5;
  &:focus,
  &:active {
      box-shadow: #00A5B4 0px 0px 2px 1px,
        #00A5B4 0px 0px 0px 1px;
      outline: none;
    }
    ::placeholder {
    color: #8899A6;
  }
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 260px;
}
`

export const ErrorMessage = styled.h1`
  display: flex;
  justify-content: flex-end;
  color: #ED4337;
  font-size: 1rem;
  font-weight: bold;
  margin-right: .8rem;
  max-width: 550px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
@media screen and (max-width: 1100px) {
  margin-bottom: 2rem;
}
`

export const ContactButton = styled.button`
  cursor: pointer;
  color: #F1F1E6;
  background: #00A5B4;
  border: 2px solid #00A5B4;
  border-radius: 30px;
  font-weight: bold;
  margin-right: 0.3rem;
  margin-top: 0.65rem;
  padding: 0.65rem;
  width: 95px;
  letter-spacing: .05em;
`

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: auto;
  width: 100%;
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
  justify-content: center;
}
`

export const ContactName = styled.h1`
  font-size: 1.8rem;
  color: #F1F1E6;
  letter-spacing: .02em;
@media screen and (max-width: 1100px) {
  font-size: 1.4rem;
}
@media screen and (max-width: 375px) {
  font-size: 1.2rem;
}
`

export const ContactEmailWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: auto;
  width: 100%;
@media screen and (max-width: 1100px) {
  justify-content: center;
}
`

export const ContactEmail = styled.p`
  font-size: 1.6rem;
  color: #F1F1E6;
  letter-spacing: .02em;
  border-bottom: 3px solid #00A5B4;
@media screen and (max-width: 1100px) {
  font-size: 1.2rem;
}
@media screen and (max-width: 376px) {
  font-size: 1.1rem;
}
`

export const ContactIconWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: auto;
  width: 100%;
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
  justify-content: center;
}
`

export const ContactIconBorder = styled.a`
  display: flex;
  border: 2px solid #00A5B4;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px;
`

export const ContactIcon = styled.img`
  height: 52px;
  width: 52px;
`

export const ContactImageWrapper = styled.div`
  display: flex;
`

export const ContactImage = styled.img`
  height: 360px;
  width: 360px;
@media screen and (max-width: 1100px) {
  height: 300px;
  width: 300px;
}
@media screen and (max-width: 376px) {
  height: 300px;
  width: 100%;
}
`