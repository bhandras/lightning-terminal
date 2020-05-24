import React from 'react';
import { observer } from 'mobx-react-lite';
import { usePrefixedTranslation } from 'hooks';
import { styled } from 'components/theme';
import { ArrowLeft, Clock, Download } from './icons';
import { HeaderThree } from './text';
import Tip from './Tip';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Left: styled.span`
    flex: 1;
    text-align: left;
  `,
  Center: styled.span`
    flex: 1;
    text-align: center;
  `,
  Right: styled.span`
    flex: 1;
    text-align: right;

    svg {
      margin-left: 50px;
    }
  `,
  BackLink: styled.a`
    text-transform: uppercase;
    font-size: ${props => props.theme.sizes.xs};
    cursor: pointer;
    line-height: 36px;

    &:hover {
      opacity: 80%;
    }
  `,
};

interface Props {
  title: string;
  onBackClick?: () => void;
  backText?: string;
  onHistoryClick?: () => void;
  onExportClick?: () => void;
}

const PageHeader: React.FC<Props> = ({
  title,
  onBackClick,
  backText,
  onHistoryClick,
  onExportClick,
}) => {
  const { l } = usePrefixedTranslation('cmps.common.PageHeader');

  const { Wrapper, Left, Center, Right, BackLink } = Styled;
  return (
    <Wrapper>
      <Left>
        {onBackClick && (
          <BackLink onClick={onBackClick}>
            <ArrowLeft />
            {backText}
          </BackLink>
        )}
      </Left>
      <Center>
        <HeaderThree>{title}</HeaderThree>
      </Center>
      <Right>
        {onHistoryClick && (
          <Tip placement="bottom" overlay={l('historyTip')}>
            <Clock size="large" onClick={onHistoryClick} />
          </Tip>
        )}
        {onExportClick && (
          <Tip placement="bottomRight" overlay={l('exportTip')}>
            <Download size="large" onClick={onExportClick} />
          </Tip>
        )}
      </Right>
    </Wrapper>
  );
};

export default observer(PageHeader);
