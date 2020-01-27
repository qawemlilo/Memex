import React from 'react'
import styled from 'styled-components'
import {
    colorDisabled,
    colorPrimary,
    colorError,
} from 'src/common-ui/components/design-library/colors'
import {
    fontSizeSmall,
    TypographyActionText,
} from 'src/common-ui/components/design-library/typography'

const StyledCancelAction = styled.div`
    padding: 5px 10px;
    background: ${props => (props.disabled ? colorDisabled : colorError)};
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
`
const StyledCancelActionLinkText = styled(TypographyActionText)`
    font-size: ${fontSizeSmall}px;
    color: #ffffff;
`
export const CancelAction = ({
    label,
    onClick,
    disabled,
}: {
    label: string
    onClick: () => void
    disabled?: boolean
}) => (
    <StyledCancelAction
        onClick={disabled === true ? undefined : onClick}
        disabled={disabled}
    >
        <StyledCancelActionLinkText>{label}</StyledCancelActionLinkText>
    </StyledCancelAction>
)