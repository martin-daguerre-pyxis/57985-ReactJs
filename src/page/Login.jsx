import DefaultLayout from "../layouts/default.layout";
import publicUrl from '../utils';
import Article from '../components/content/Article';
import withAuth from '../hocs/withAuth';
import LoginForm from '../components/content/LoginForm';

const Login = (props) => {

  return (
    <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <Article title=" "
        picture={`${publicUrl}login.svg`} pictureClass=" w-[30vw] lg:w-[30vw]">
        <div className="mb-2 text-5xl font-bold text-purple-700 font-dark">Login / Registro</div>
        <LoginForm></LoginForm>
      </Article>
    </DefaultLayout >
  )
}

export default withAuth(Login);