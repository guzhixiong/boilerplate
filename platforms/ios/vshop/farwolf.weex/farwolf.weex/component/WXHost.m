//
//  WXHost.m
//  Pods
//
//  Created by 郑江荣 on 2017/10/3.
//
//

#import "WXHost.h"
#import "WeexFactory.h"
#import "URL.h"
@implementation WXHost


-(instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance
{
    if(self= [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance])
    {
//        [self updateAttributes:attributes];
        
        if (attributes[@"items"])
        {
            self.items=attributes[@"items"];
        }
        
        if (attributes[@"index"])
        {
        
            self.index=[attributes[@"index"] integerValue];
        }
        else
        {
            self.index=0;
        }
       
    }
    
    return self;
}


-(void)updateAttributes:(NSDictionary *)attributes
{
    
    dispatch_async(dispatch_get_main_queue(), ^{
 
        if (attributes[@"index"])
        {
            self.index=[attributes[@"index"] integerValue];
            if(self.index>=self.items.count)
            {
                self.index=self.items.count-1;
            }
            if(self.index<0)
            {
                self.index=0;
            }
            [self show];
            
        }
       
       
    });
 
    
    
    
}

-(void)viewDidLoad
{
 
    if(self.items!=nil&&[self.items count]>0)
    [self updateItems:self.items];
    [self show];
    
}

-(void )show
{
    NSMutableArray *n=self.host.childViewControllers;
    for(UIViewController *vc in  n)
    {
        WXNormalViewContrller *cv=vc;
        BOOL t=cv.key.integerValue!=self.index;
        [vc.view setHidden:t];
    }
}

-(void)updateItems:(NSMutableArray*)items
{
 
     self.items=items;
     NSMutableArray *n=self.host.childViewControllers;
     for(UIViewController *vc in  n)
     {
         [vc removeFromParentViewController];
         [vc.view removeFromSuperview];
     }
 
    for(NSString *url in items)
    {
        NSString *nurl=[URL getFinalUrl:url weexInstance:self.weexInstance];
        [WeexFactory renderNew:[NSURL URLWithString:nurl] compelete:^(WXNormalViewContrller *cv) {
            
            [_host addVc:cv];
            int i=  [items indexOfObject:url];
            NSString *inx=[@"" addInt:i];
            cv.key=inx;
            [cv.view setHidden:[items indexOfObject:url]!=self.index];
            
        } frame:self.weexInstance.frame];
    
    }
     [self show];
    
}


-(UIView*)loadView
{
    UIViewController *vc= [[UIViewController alloc] init];
    self.host=vc;
    [self.weexInstance.viewController addChildViewController:self.host];
    return vc.view;
}


@end
