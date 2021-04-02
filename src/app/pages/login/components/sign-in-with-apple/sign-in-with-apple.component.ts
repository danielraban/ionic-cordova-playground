import { Component, OnInit } from '@angular/core';
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';

@Component({
  selector: 'app-sign-in-with-apple',
  templateUrl: './sign-in-with-apple.component.html',
  styleUrls: ['./sign-in-with-apple.component.scss'],
})
export class SignInWithAppleComponent implements OnInit {

  constructor(private signInWithApple: SignInWithApple) { }

  ngOnInit() { }

  public initSignInWithApple() {
    console.log('im here')
    this.signInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
      ]
    })
    .then((res: AppleSignInResponse) => {
      // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
      alert('Send token to apple for verification: ' + res.identityToken);
      console.log(res);
    })
    .catch((error: AppleSignInErrorResponse) => {
      alert(error.code + ' ' + error.localizedDescription);
      console.error(error);
    });
  }
}
