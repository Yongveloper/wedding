import classNames from 'classnames/bind';
import Section from '@shared/Section';
import styles from './Contact.module.scss';
import Accordion from '@shared/Accordion';
import { IPerson, IWedding } from '@/models/wedding';
import { CopyToClipboard as OriginalCopyToClipboard } from 'react-copy-to-clipboard';

// 타입 단언을 사용하여 타입 에러 우회
const CopyToClipboard = OriginalCopyToClipboard as any;

const cx = classNames.bind(styles);

function Contact({
  groom,
  bride,
}: {
  groom: IWedding['groom'];
  bride: IWedding['bride'];
}) {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo
          name={groom.name}
          account={groom.account}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          name={groom.parents[0].name}
          account={groom.parents[0].account}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        <ContactInfo
          name={groom.parents[1].name}
          account={groom.parents[1].account}
          phoneNumber={groom.parents[1].phoneNumber}
        />
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          name={bride.name}
          account={bride.account}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          name={bride.parents[0].name}
          account={bride.parents[0].account}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          name={bride.parents[1].name}
          account={bride.parents[1].account}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  );
}

function ContactInfo({ name, account, phoneNumber }: IPerson) {
  return (
    <div className={cx('wrap-contact')}>
      {/* 정보표현 */}
      <div className={cx('wrap-contact-info')}>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      {/* 버튼들 */}
      <ul className={cx('wrap-buttons')}>
        <li>
          <a href={`tel: ${phoneNumber}`} className={cx('button')}>
            전화
          </a>
        </li>
        <li>
          <CopyToClipboard
            text={`${account.accountNumber} ${account.bankName}`}
            onCopy={() => alert('계좌번호가 복사되었습니다.')}
          >
            <button className={cx('button')}>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink && (
          <li>
            <a
              href={account.kakaopayLink}
              target="_blank"
              className={cx('button')}
              rel="noreferrer"
            >
              송금
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Contact;
