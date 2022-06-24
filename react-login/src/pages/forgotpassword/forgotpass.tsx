import {
  Button,
  FormItem,
  LockIcon,
  Title,
  UserIcon,
} from "pakagelogin-nhanqt";
import "./forgot.scss";
const ForgotPass = () => {
  return (
    <div className="pageforgotpass">
      <div className="container">
        <div className="pageforgotpass__form">
          <form>
            <Title padding="30px 0 40px">Fogot Password</Title>
            <div className="pageforgotpass__form__wapperformitem">
              <FormItem
                typeInput="text"
                textLabel="Username"
                placeholderInput="Type in username..."
                iconInput={<UserIcon />}
              ></FormItem>
              <FormItem
                paddingLabel="10px"
                textLabel="Password"
                typeInput="password"
                placeholderInput="Type in password..."
                iconInput={<LockIcon />}
              ></FormItem>
              <FormItem
                textLabel="Comfig password"
                typeInput="password"
                placeholderInput="Type in password..."
                iconInput={<LockIcon />}
              ></FormItem>
            </div>
            <div className="pageforgotpass__form__button">
              <Button size="medium" type="button" text="Ok" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPass;
