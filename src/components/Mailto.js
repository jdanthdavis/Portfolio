import { MailtoWrapper } from './Mailto.elements'

const Mailto = ({ email, subject, body, ...props }) => {
    return (
        <>
            <MailtoWrapper href={'mailto:${email}?subject=${subject || ""}&body=${body || ""}'}>
                {props.children}
            </MailtoWrapper>
        </>
    )
}

export default Mailto