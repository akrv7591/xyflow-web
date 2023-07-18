import { SignInMagicLink, AuthFormWrapper } from '@/components/AuthForms';

const authFormLinks = [{ href: '/signin/password', label: 'Use Email + Password' }];

const SignInPage = () => {
  return (
    <AuthFormWrapper
      links={authFormLinks}
      title="Sign In"
      description="Enter your email to sign in or create an account."
    >
      <SignInMagicLink />
    </AuthFormWrapper>
  );
};

export default SignInPage;