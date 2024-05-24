import { Component, Input } from '@angular/core';
import { LoginService } from '../api/login.service';
import { UsnService } from '../api/usn.service';
import { RpcService } from '../api/rpc.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() serviceType: 'login' | 'usn' | 'rpc';
  @Input() methods: Array<{ name: string; params: any; alias: string }>;

  constructor(
    private loginService: LoginService,
    private usnService: UsnService,
    private rpcService: RpcService
  ) {
    this.serviceType = 'login';
    this.methods = [];
  }

  handleMethodCall(methodName: string, params: any) {
    if (this.serviceType === 'login') {
      this.handleLoginServiceMethod(methodName, params);
    } else if (this.serviceType === 'usn') {
      this.handleUsnServiceMethod(methodName, params);
    } else if (this.serviceType === 'rpc') {
      this.handleRpcServiceMethod(methodName, params);
    }
  }

  private handleLoginServiceMethod(methodName: string, params: any) {
    switch (methodName) {
      case 'login':
        this.loginService
          .login(params.username, params.password)
          .subscribe((response) => {
            console.log('Login response:', response);
          });
        break;
      case 'getUsers':
        this.loginService.getUsers().subscribe((response) => {
          console.log('Users:', response);
        });
        break;
      default:
        console.log('Unknown method for LoginService');
    }
  }

  private handleUsnServiceMethod(methodName: string, params: any) {
    switch (methodName) {
      case 'getAllUsn':
        this.usnService.getAllUsn().subscribe((response) => {
          console.log('All USN:', response);
        });
        break;
      case 'getUsnInfoByUuid':
        this.usnService.getUsnInfoByUuid(params.id).subscribe((response) => {
          console.log('USN Info:', response);
        });
        break;
      case 'getAllUsnTelemetryByUuid':
        this.usnService
          .getAllUsnTelemetryByUuid(params.id)
          .subscribe((response) => {
            console.log('USN Telemetry:', response);
          });
        break;
      case 'getUsnByUuidAndKey':
        this.usnService
          .getUsnByUuidAndKey(params.id, params.key)
          .subscribe((response) => {
            console.log('USN by Key:', response);
          });
        break;
      case 'postUsnByUuid':
        this.usnService.postUsnByUuid(params.id).subscribe((response) => {
          console.log('Post USN:', response);
        });
        break;
      default:
        console.log('Unknown method for UsnService');
    }
  }

  private handleRpcServiceMethod(methodName: string, params: any) {
    if (methodName === 'rpcRequest') {
      this.rpcService
        .rpcRequest(params.id, params.callType, params.requestBody)
        .subscribe((response) => {
          console.log('RPC response:', response);
        });
    } else {
      console.log('Unknown method for RpcService');
    }
  }
}
