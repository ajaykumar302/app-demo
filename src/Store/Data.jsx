import React, { createContext, useState } from 'react'
export const store = createContext()
const Data = (props) => {
    const [data,SetData] = useState([
        {
            id : 1,
            category : 'Meal Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/af6/af6990002e0005b92cdda145b0514a07.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFowdhbQSzbVaGfL6L50WbwTjQwrZKGe8d0KF5PUIfPrAiBJxvAcBcDjHO6M%2Bl3EUUlnMRWTwr758UAqIjHJdNHDOSrVBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMDrTfCPonbW6y0QrOKqkENdhE16QnBl2rjbR35YS0UjHkrl4eo8bJzcipEPAL0uIs6vx5W3oCRrn8XH6laX4NV0%2BXzQcc4DlpojI52wrBExEAxCIpzksWRl8aom2qRfHKccgHvi%2FoFUiJyuUNkE8BxTRSmNwgaQaQ9rjZsTd43IpbviDVGn48Sgxy5ZA7agMfXvh9bdQ%2Ff3D%2B1TxjggTMLUKMamuM%2BjUGbchfBz8IBbprtnYujG1G%2Bn8VR3%2B9Jk6F%2FlaASRpgjNbFjs%2BxtPHSRXE3tAhbmBZtNt9Q%2Fc5H0GH9dqDDiipirXXF%2BP2iZHg6TwC0J3VTKsrtvE7kCY4xi2sxS%2BdTfHCHWjxCHkuPrnAp5hJDELbrQaW%2FZq%2F7LrtZeDSyLkKE5dOopqN0DHZR6Nio1E6EhqAzzM9NVXpu766a8Cg27B%2FLLmNl92x3QngEUMeIwrmOYaSp3IawU0Mvr3aYsH1cFQUk%2BAvCRxtYepuxcSXY%2B3WSfRPSQUfQ%2BJzHONNdtF%2BIyFPWGW9RVDjmvfW9rpvsajObQIz4kjNQwrMkWz%2FMxJoUsIqUoKhC8KJqyKPDT55Z4%2BKRPk3wbqjmFnd3LkVYWnHhRNqaY8WJ7UBs5LwfTc6VlyJFquXOztdpdfT3nCvGk8cSKY6HpeDnO4pZWaHIryTlwh7iHQ4sEgJxcEBJ%2BO%2FPDEBPNuncr5Uu0CimGDzC4rJAVz7Lmgh9YqbEB4%2BOb5%2F%2BnLovSDJ9Z9KMHDC2CzeYcTDHgpebBjqqAZDj0lhz7ZBhA%2F0fmIWlwn4h80mmo6MPWQm39wsaKtepZDLBhgHFHOssqicbRafNcsZAC%2FZj0YGonlG%2FL6%2BPaZy76rW7fZ4Zjb25v8We2auJ4bsrhEh4FTp0Z1SiVJFLdKEYIxMFrT117kEF05PZl8IDzvVXGoKYRb0oLPp1WlOsvbFXxpLQz7vuR5Y8bY9UV3iTfGWRteS9OmjSevAt7lUYgFxfZHh1wktV&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMY4HKHD7%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e993526f428bde54838281e6d497f959b7110e30af6adb6548a1e50807330012',
            title : 'breakfast',
            about : 'Total Amount Of Calories : 1889',
            name : 'Low-Carb Breakfast Wraps'
        },
        {
            id : 2,
            category : 'Meal Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/4be/4be263e4833b9a1e652d40ae116dc658.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFowdhbQSzbVaGfL6L50WbwTjQwrZKGe8d0KF5PUIfPrAiBJxvAcBcDjHO6M%2Bl3EUUlnMRWTwr758UAqIjHJdNHDOSrVBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMDrTfCPonbW6y0QrOKqkENdhE16QnBl2rjbR35YS0UjHkrl4eo8bJzcipEPAL0uIs6vx5W3oCRrn8XH6laX4NV0%2BXzQcc4DlpojI52wrBExEAxCIpzksWRl8aom2qRfHKccgHvi%2FoFUiJyuUNkE8BxTRSmNwgaQaQ9rjZsTd43IpbviDVGn48Sgxy5ZA7agMfXvh9bdQ%2Ff3D%2B1TxjggTMLUKMamuM%2BjUGbchfBz8IBbprtnYujG1G%2Bn8VR3%2B9Jk6F%2FlaASRpgjNbFjs%2BxtPHSRXE3tAhbmBZtNt9Q%2Fc5H0GH9dqDDiipirXXF%2BP2iZHg6TwC0J3VTKsrtvE7kCY4xi2sxS%2BdTfHCHWjxCHkuPrnAp5hJDELbrQaW%2FZq%2F7LrtZeDSyLkKE5dOopqN0DHZR6Nio1E6EhqAzzM9NVXpu766a8Cg27B%2FLLmNl92x3QngEUMeIwrmOYaSp3IawU0Mvr3aYsH1cFQUk%2BAvCRxtYepuxcSXY%2B3WSfRPSQUfQ%2BJzHONNdtF%2BIyFPWGW9RVDjmvfW9rpvsajObQIz4kjNQwrMkWz%2FMxJoUsIqUoKhC8KJqyKPDT55Z4%2BKRPk3wbqjmFnd3LkVYWnHhRNqaY8WJ7UBs5LwfTc6VlyJFquXOztdpdfT3nCvGk8cSKY6HpeDnO4pZWaHIryTlwh7iHQ4sEgJxcEBJ%2BO%2FPDEBPNuncr5Uu0CimGDzC4rJAVz7Lmgh9YqbEB4%2BOb5%2F%2BnLovSDJ9Z9KMHDC2CzeYcTDHgpebBjqqAZDj0lhz7ZBhA%2F0fmIWlwn4h80mmo6MPWQm39wsaKtepZDLBhgHFHOssqicbRafNcsZAC%2FZj0YGonlG%2FL6%2BPaZy76rW7fZ4Zjb25v8We2auJ4bsrhEh4FTp0Z1SiVJFLdKEYIxMFrT117kEF05PZl8IDzvVXGoKYRb0oLPp1WlOsvbFXxpLQz7vuR5Y8bY9UV3iTfGWRteS9OmjSevAt7lUYgFxfZHh1wktV&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021133Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMY4HKHD7%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b32ac54ffedcfb6836d648796c849194b654275adaf59feab8accc1e27dbc723',
            title : 'snack',
            about : 'Total Amount Of Calories : 697',
            name : 'Crunchy Chocolate-Raspberry Yogurt'
        },
        {
            id : 3,
            category : 'Meal Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/d0d/d0d694544236664fd8cce5c9a0e2171f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCNdPVzeTZByDtp3Ddg3t5zUFASl4iJqQ6sSLpJoGHKYgIgH3dNGobQvwiZz8mhVhIRAvRHW80%2FGiWp3jz7R0HEfaoq1QQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIRPLkG6H64cgcmomSqpBGyQOmdrvXqnxkKiyx7REqvvqrZNvS0FDNTdp%2BLpqv4yGgz3930QM2xoP5cnnKXjAjA7ATNh23%2F53V1NV1G26AB6gsaiMMcasZbmhkuY8ddWHA4B%2F1Jv%2BBrwtZoxanjCbDrt4dpT%2BTkVotvcV0GAff593BSwvc146a4Mk6g7Zc8KMdTmoEHVIM0sV6KJFfExU2RDWp1iqKGGKYZcwjVn%2BgSXDelcI2WSLI2N8m3dC4324eLwOA3a1KBiCm7K%2BDAoelpGulhl94vwIgMCeU5tI0M9MXKe9VbjB3ZiAPGyH7UmTqErI0FNLdqzzNWBP2Ls%2BAe1eHGAIpJliAHYOobX1gWkm3soUpp%2F%2F739venwQdGRUmLfMofCVP4zxzdzPZjLqL%2Bi57gCUSerzkZoCXtDTdp1%2FsWHIOZVYoUutGzNx07l809QCoR86fBxL8J87FkKLub6fDqRgHU4CvOp0QlELfuT5t7ISE2uk1R7X5uygNhPLuxQikKVMG5uwnM717PUQ%2BSC9yxB5%2FnlcsVSz0aeM0q8jWupGo71HXTPqXWis1e4KdqanrkGoK7UbNBkpGeAeLQNpHJdT940vlVOJL4S9N1OPe793j9E%2FrXvCcVzxAu34TUN0CNglezieR%2Bi2Zp5Qvl8pfAIGiRs9OO8VBkg4dnhgVPw2dwSjlPu15ZzOwR01HVxnyuWtNzMAFsjuff%2BAQ%2Bemetn42FabpZF6uOG2MQY%2FtshxGTecJ4wyf6WmwY6qQFeogTg8W0SIZ%2F%2BFrCXtndQu4GjDn6%2F6O76ws6RZtI5OoHLo6m36iOCufJ7%2BdQUEzcfmEl6f306F%2BwCZ58LMTPn2LF0A3vA0PwLaLcow%2BG%2BHqT%2FWo2ojqZdGafj9JgbL57ihzScpbOKteJLX%2BYF1HvB7T9rKE2U3mg%2FoO4TnX9zStHk%2FPLeFmVsAgGZMJhR0nVDKHc6%2FgnPPrSaqCi2EH%2FGi6DQQ0KcI1g0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021308Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNCLYU4HS%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60ff1918714bdc59efdd9e3f9af085e9a1fb17e2db5adfca571ef145b2ef4362',
            title : 'Teatime',
            about : 'Total Amount Of Calories : 4962',
            name : 'Its So Easy to Make Cream Scones from Scratch'
        },
        {
            id : 4,
            category : 'Cuisine Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/adc/adc70ed517d1b3e610ad213d44169c3e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCNdPVzeTZByDtp3Ddg3t5zUFASl4iJqQ6sSLpJoGHKYgIgH3dNGobQvwiZz8mhVhIRAvRHW80%2FGiWp3jz7R0HEfaoq1QQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIRPLkG6H64cgcmomSqpBGyQOmdrvXqnxkKiyx7REqvvqrZNvS0FDNTdp%2BLpqv4yGgz3930QM2xoP5cnnKXjAjA7ATNh23%2F53V1NV1G26AB6gsaiMMcasZbmhkuY8ddWHA4B%2F1Jv%2BBrwtZoxanjCbDrt4dpT%2BTkVotvcV0GAff593BSwvc146a4Mk6g7Zc8KMdTmoEHVIM0sV6KJFfExU2RDWp1iqKGGKYZcwjVn%2BgSXDelcI2WSLI2N8m3dC4324eLwOA3a1KBiCm7K%2BDAoelpGulhl94vwIgMCeU5tI0M9MXKe9VbjB3ZiAPGyH7UmTqErI0FNLdqzzNWBP2Ls%2BAe1eHGAIpJliAHYOobX1gWkm3soUpp%2F%2F739venwQdGRUmLfMofCVP4zxzdzPZjLqL%2Bi57gCUSerzkZoCXtDTdp1%2FsWHIOZVYoUutGzNx07l809QCoR86fBxL8J87FkKLub6fDqRgHU4CvOp0QlELfuT5t7ISE2uk1R7X5uygNhPLuxQikKVMG5uwnM717PUQ%2BSC9yxB5%2FnlcsVSz0aeM0q8jWupGo71HXTPqXWis1e4KdqanrkGoK7UbNBkpGeAeLQNpHJdT940vlVOJL4S9N1OPe793j9E%2FrXvCcVzxAu34TUN0CNglezieR%2Bi2Zp5Qvl8pfAIGiRs9OO8VBkg4dnhgVPw2dwSjlPu15ZzOwR01HVxnyuWtNzMAFsjuff%2BAQ%2Bemetn42FabpZF6uOG2MQY%2FtshxGTecJ4wyf6WmwY6qQFeogTg8W0SIZ%2F%2BFrCXtndQu4GjDn6%2F6O76ws6RZtI5OoHLo6m36iOCufJ7%2BdQUEzcfmEl6f306F%2BwCZ58LMTPn2LF0A3vA0PwLaLcow%2BG%2BHqT%2FWo2ojqZdGafj9JgbL57ihzScpbOKteJLX%2BYF1HvB7T9rKE2U3mg%2FoO4TnX9zStHk%2FPLeFmVsAgGZMJhR0nVDKHc6%2FgnPPrSaqCi2EH%2FGi6DQQ0KcI1g0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021459Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNCLYU4HS%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5dfec795ef6296c3afc79630e53974b4a20252ea6577815fe09de452266624f',
            title : 'Indian',
            about : 'Total Amount Of Calories : 1202 ',
            name : 'Fodni Bhaat (Indian Fried Rice) Recipe'
        },
        {
            id : 5,
            category : 'Cuisine Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/004/004713ca0469c54764000cc514214880.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFowdhbQSzbVaGfL6L50WbwTjQwrZKGe8d0KF5PUIfPrAiBJxvAcBcDjHO6M%2Bl3EUUlnMRWTwr758UAqIjHJdNHDOSrVBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMDrTfCPonbW6y0QrOKqkENdhE16QnBl2rjbR35YS0UjHkrl4eo8bJzcipEPAL0uIs6vx5W3oCRrn8XH6laX4NV0%2BXzQcc4DlpojI52wrBExEAxCIpzksWRl8aom2qRfHKccgHvi%2FoFUiJyuUNkE8BxTRSmNwgaQaQ9rjZsTd43IpbviDVGn48Sgxy5ZA7agMfXvh9bdQ%2Ff3D%2B1TxjggTMLUKMamuM%2BjUGbchfBz8IBbprtnYujG1G%2Bn8VR3%2B9Jk6F%2FlaASRpgjNbFjs%2BxtPHSRXE3tAhbmBZtNt9Q%2Fc5H0GH9dqDDiipirXXF%2BP2iZHg6TwC0J3VTKsrtvE7kCY4xi2sxS%2BdTfHCHWjxCHkuPrnAp5hJDELbrQaW%2FZq%2F7LrtZeDSyLkKE5dOopqN0DHZR6Nio1E6EhqAzzM9NVXpu766a8Cg27B%2FLLmNl92x3QngEUMeIwrmOYaSp3IawU0Mvr3aYsH1cFQUk%2BAvCRxtYepuxcSXY%2B3WSfRPSQUfQ%2BJzHONNdtF%2BIyFPWGW9RVDjmvfW9rpvsajObQIz4kjNQwrMkWz%2FMxJoUsIqUoKhC8KJqyKPDT55Z4%2BKRPk3wbqjmFnd3LkVYWnHhRNqaY8WJ7UBs5LwfTc6VlyJFquXOztdpdfT3nCvGk8cSKY6HpeDnO4pZWaHIryTlwh7iHQ4sEgJxcEBJ%2BO%2FPDEBPNuncr5Uu0CimGDzC4rJAVz7Lmgh9YqbEB4%2BOb5%2F%2BnLovSDJ9Z9KMHDC2CzeYcTDHgpebBjqqAZDj0lhz7ZBhA%2F0fmIWlwn4h80mmo6MPWQm39wsaKtepZDLBhgHFHOssqicbRafNcsZAC%2FZj0YGonlG%2FL6%2BPaZy76rW7fZ4Zjb25v8We2auJ4bsrhEh4FTp0Z1SiVJFLdKEYIxMFrT117kEF05PZl8IDzvVXGoKYRb0oLPp1WlOsvbFXxpLQz7vuR5Y8bY9UV3iTfGWRteS9OmjSevAt7lUYgFxfZHh1wktV&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021551Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMY4HKHD7%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7a389d0ca201564a04268e311d3cd16038178596c97b8ca2339bae58f2818a35',
            title : 'american',
            about : 'Total Amount Of Calories :3930 ',
            name : 'Classic American Chili Mac With Elbows'
        },
        {
            id : 6,
            category : 'Cuisine Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/9a3/9a3f718e269bca6355ddde6a9e154d14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFowdhbQSzbVaGfL6L50WbwTjQwrZKGe8d0KF5PUIfPrAiBJxvAcBcDjHO6M%2Bl3EUUlnMRWTwr758UAqIjHJdNHDOSrVBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMDrTfCPonbW6y0QrOKqkENdhE16QnBl2rjbR35YS0UjHkrl4eo8bJzcipEPAL0uIs6vx5W3oCRrn8XH6laX4NV0%2BXzQcc4DlpojI52wrBExEAxCIpzksWRl8aom2qRfHKccgHvi%2FoFUiJyuUNkE8BxTRSmNwgaQaQ9rjZsTd43IpbviDVGn48Sgxy5ZA7agMfXvh9bdQ%2Ff3D%2B1TxjggTMLUKMamuM%2BjUGbchfBz8IBbprtnYujG1G%2Bn8VR3%2B9Jk6F%2FlaASRpgjNbFjs%2BxtPHSRXE3tAhbmBZtNt9Q%2Fc5H0GH9dqDDiipirXXF%2BP2iZHg6TwC0J3VTKsrtvE7kCY4xi2sxS%2BdTfHCHWjxCHkuPrnAp5hJDELbrQaW%2FZq%2F7LrtZeDSyLkKE5dOopqN0DHZR6Nio1E6EhqAzzM9NVXpu766a8Cg27B%2FLLmNl92x3QngEUMeIwrmOYaSp3IawU0Mvr3aYsH1cFQUk%2BAvCRxtYepuxcSXY%2B3WSfRPSQUfQ%2BJzHONNdtF%2BIyFPWGW9RVDjmvfW9rpvsajObQIz4kjNQwrMkWz%2FMxJoUsIqUoKhC8KJqyKPDT55Z4%2BKRPk3wbqjmFnd3LkVYWnHhRNqaY8WJ7UBs5LwfTc6VlyJFquXOztdpdfT3nCvGk8cSKY6HpeDnO4pZWaHIryTlwh7iHQ4sEgJxcEBJ%2BO%2FPDEBPNuncr5Uu0CimGDzC4rJAVz7Lmgh9YqbEB4%2BOb5%2F%2BnLovSDJ9Z9KMHDC2CzeYcTDHgpebBjqqAZDj0lhz7ZBhA%2F0fmIWlwn4h80mmo6MPWQm39wsaKtepZDLBhgHFHOssqicbRafNcsZAC%2FZj0YGonlG%2FL6%2BPaZy76rW7fZ4Zjb25v8We2auJ4bsrhEh4FTp0Z1SiVJFLdKEYIxMFrT117kEF05PZl8IDzvVXGoKYRb0oLPp1WlOsvbFXxpLQz7vuR5Y8bY9UV3iTfGWRteS9OmjSevAt7lUYgFxfZHh1wktV&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021706Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMY4HKHD7%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2a0d0be92a5e89c1ed1b48d9c0f34a5ae253ec0cad68f7049b4515a577b67fba',
            title : 'japanese',
            about : 'Total Amount Of Calories :719 ',
            name : 'Japanese-style bento box'
        },
        {
            id : 7,
            category : 'Dish Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/9dc/9dce4a67805b620f9a7f966a12bf0287.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCNdPVzeTZByDtp3Ddg3t5zUFASl4iJqQ6sSLpJoGHKYgIgH3dNGobQvwiZz8mhVhIRAvRHW80%2FGiWp3jz7R0HEfaoq1QQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIRPLkG6H64cgcmomSqpBGyQOmdrvXqnxkKiyx7REqvvqrZNvS0FDNTdp%2BLpqv4yGgz3930QM2xoP5cnnKXjAjA7ATNh23%2F53V1NV1G26AB6gsaiMMcasZbmhkuY8ddWHA4B%2F1Jv%2BBrwtZoxanjCbDrt4dpT%2BTkVotvcV0GAff593BSwvc146a4Mk6g7Zc8KMdTmoEHVIM0sV6KJFfExU2RDWp1iqKGGKYZcwjVn%2BgSXDelcI2WSLI2N8m3dC4324eLwOA3a1KBiCm7K%2BDAoelpGulhl94vwIgMCeU5tI0M9MXKe9VbjB3ZiAPGyH7UmTqErI0FNLdqzzNWBP2Ls%2BAe1eHGAIpJliAHYOobX1gWkm3soUpp%2F%2F739venwQdGRUmLfMofCVP4zxzdzPZjLqL%2Bi57gCUSerzkZoCXtDTdp1%2FsWHIOZVYoUutGzNx07l809QCoR86fBxL8J87FkKLub6fDqRgHU4CvOp0QlELfuT5t7ISE2uk1R7X5uygNhPLuxQikKVMG5uwnM717PUQ%2BSC9yxB5%2FnlcsVSz0aeM0q8jWupGo71HXTPqXWis1e4KdqanrkGoK7UbNBkpGeAeLQNpHJdT940vlVOJL4S9N1OPe793j9E%2FrXvCcVzxAu34TUN0CNglezieR%2Bi2Zp5Qvl8pfAIGiRs9OO8VBkg4dnhgVPw2dwSjlPu15ZzOwR01HVxnyuWtNzMAFsjuff%2BAQ%2Bemetn42FabpZF6uOG2MQY%2FtshxGTecJ4wyf6WmwY6qQFeogTg8W0SIZ%2F%2BFrCXtndQu4GjDn6%2F6O76ws6RZtI5OoHLo6m36iOCufJ7%2BdQUEzcfmEl6f306F%2BwCZ58LMTPn2LF0A3vA0PwLaLcow%2BG%2BHqT%2FWo2ojqZdGafj9JgbL57ihzScpbOKteJLX%2BYF1HvB7T9rKE2U3mg%2FoO4TnX9zStHk%2FPLeFmVsAgGZMJhR0nVDKHc6%2FgnPPrSaqCi2EH%2FGi6DQQ0KcI1g0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNCLYU4HS%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=77d14461c4d8c95744c7a3234307e56fd7179f8735bd1a806658d0ab0c5b1185',
            title : 'Seafood',
            about : 'Total Amount Of Calories : 3561',
            name : 'Seafood fideuà'
        },
        {
            id : 8,
            category : 'Dish Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/759/759f118d38b3004475c8a885d6c9cb64.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCNdPVzeTZByDtp3Ddg3t5zUFASl4iJqQ6sSLpJoGHKYgIgH3dNGobQvwiZz8mhVhIRAvRHW80%2FGiWp3jz7R0HEfaoq1QQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIRPLkG6H64cgcmomSqpBGyQOmdrvXqnxkKiyx7REqvvqrZNvS0FDNTdp%2BLpqv4yGgz3930QM2xoP5cnnKXjAjA7ATNh23%2F53V1NV1G26AB6gsaiMMcasZbmhkuY8ddWHA4B%2F1Jv%2BBrwtZoxanjCbDrt4dpT%2BTkVotvcV0GAff593BSwvc146a4Mk6g7Zc8KMdTmoEHVIM0sV6KJFfExU2RDWp1iqKGGKYZcwjVn%2BgSXDelcI2WSLI2N8m3dC4324eLwOA3a1KBiCm7K%2BDAoelpGulhl94vwIgMCeU5tI0M9MXKe9VbjB3ZiAPGyH7UmTqErI0FNLdqzzNWBP2Ls%2BAe1eHGAIpJliAHYOobX1gWkm3soUpp%2F%2F739venwQdGRUmLfMofCVP4zxzdzPZjLqL%2Bi57gCUSerzkZoCXtDTdp1%2FsWHIOZVYoUutGzNx07l809QCoR86fBxL8J87FkKLub6fDqRgHU4CvOp0QlELfuT5t7ISE2uk1R7X5uygNhPLuxQikKVMG5uwnM717PUQ%2BSC9yxB5%2FnlcsVSz0aeM0q8jWupGo71HXTPqXWis1e4KdqanrkGoK7UbNBkpGeAeLQNpHJdT940vlVOJL4S9N1OPe793j9E%2FrXvCcVzxAu34TUN0CNglezieR%2Bi2Zp5Qvl8pfAIGiRs9OO8VBkg4dnhgVPw2dwSjlPu15ZzOwR01HVxnyuWtNzMAFsjuff%2BAQ%2Bemetn42FabpZF6uOG2MQY%2FtshxGTecJ4wyf6WmwY6qQFeogTg8W0SIZ%2F%2BFrCXtndQu4GjDn6%2F6O76ws6RZtI5OoHLo6m36iOCufJ7%2BdQUEzcfmEl6f306F%2BwCZ58LMTPn2LF0A3vA0PwLaLcow%2BG%2BHqT%2FWo2ojqZdGafj9JgbL57ihzScpbOKteJLX%2BYF1HvB7T9rKE2U3mg%2FoO4TnX9zStHk%2FPLeFmVsAgGZMJhR0nVDKHc6%2FgnPPrSaqCi2EH%2FGi6DQQ0KcI1g0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T021920Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNCLYU4HS%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=187bbf1c506015a4ecdbad703e39cc4b0a7d3522d5917f15084d01ab1026db04',
            title : 'drinks',
            about : 'Total Amount Of Calories : 678',
            name : 'Walnut and Banana Smoothie Recipe'
        },
        {
            id : 9,
            category : 'Dish Types',
            image : 'https://edamam-product-images.s3.amazonaws.com/web-img/5f4/5f479033de1a1b08d39f0debc59cdb70.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCNdPVzeTZByDtp3Ddg3t5zUFASl4iJqQ6sSLpJoGHKYgIgH3dNGobQvwiZz8mhVhIRAvRHW80%2FGiWp3jz7R0HEfaoq1QQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIRPLkG6H64cgcmomSqpBGyQOmdrvXqnxkKiyx7REqvvqrZNvS0FDNTdp%2BLpqv4yGgz3930QM2xoP5cnnKXjAjA7ATNh23%2F53V1NV1G26AB6gsaiMMcasZbmhkuY8ddWHA4B%2F1Jv%2BBrwtZoxanjCbDrt4dpT%2BTkVotvcV0GAff593BSwvc146a4Mk6g7Zc8KMdTmoEHVIM0sV6KJFfExU2RDWp1iqKGGKYZcwjVn%2BgSXDelcI2WSLI2N8m3dC4324eLwOA3a1KBiCm7K%2BDAoelpGulhl94vwIgMCeU5tI0M9MXKe9VbjB3ZiAPGyH7UmTqErI0FNLdqzzNWBP2Ls%2BAe1eHGAIpJliAHYOobX1gWkm3soUpp%2F%2F739venwQdGRUmLfMofCVP4zxzdzPZjLqL%2Bi57gCUSerzkZoCXtDTdp1%2FsWHIOZVYoUutGzNx07l809QCoR86fBxL8J87FkKLub6fDqRgHU4CvOp0QlELfuT5t7ISE2uk1R7X5uygNhPLuxQikKVMG5uwnM717PUQ%2BSC9yxB5%2FnlcsVSz0aeM0q8jWupGo71HXTPqXWis1e4KdqanrkGoK7UbNBkpGeAeLQNpHJdT940vlVOJL4S9N1OPe793j9E%2FrXvCcVzxAu34TUN0CNglezieR%2Bi2Zp5Qvl8pfAIGiRs9OO8VBkg4dnhgVPw2dwSjlPu15ZzOwR01HVxnyuWtNzMAFsjuff%2BAQ%2Bemetn42FabpZF6uOG2MQY%2FtshxGTecJ4wyf6WmwY6qQFeogTg8W0SIZ%2F%2BFrCXtndQu4GjDn6%2F6O76ws6RZtI5OoHLo6m36iOCufJ7%2BdQUEzcfmEl6f306F%2BwCZ58LMTPn2LF0A3vA0PwLaLcow%2BG%2BHqT%2FWo2ojqZdGafj9JgbL57ihzScpbOKteJLX%2BYF1HvB7T9rKE2U3mg%2FoO4TnX9zStHk%2FPLeFmVsAgGZMJhR0nVDKHc6%2FgnPPrSaqCi2EH%2FGi6DQQ0KcI1g0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T022017Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNCLYU4HS%2F20221105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e0fed7e3bdd6394615237912c391d253f9f3e54bfb6320f33c1d52910767a7c1',
            title : 'special occasions',
            about : 'Total Amount Of Calories : 4149',
            name : 'Barbecued quail with fig and walnut salad'
        },
    ])


return (
    <div>
        <store.Provider value= {[data,SetData]}>
        {props.children}
      
        </store.Provider>
    </div>
  )
}

export default Data;