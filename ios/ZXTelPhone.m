//
//  ZXTelPhone.m
//  ZXZhang8
//
//  Created by xqw on 2017/1/12.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ZXTelPhone.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
@implementation ZXTelPhone
@synthesize bridge=_bridge;

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(telPhone:(NSString*)phone){
  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"tel://%@",phone]]];
}
@end
