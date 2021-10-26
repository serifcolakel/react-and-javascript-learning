import React, { useContext } from "react";
//Komponentler arası (Parent to Child) veri aktarma da kullanılır
//1 context için 1 provider(sağlayıcı) gerekli
//1 context ile 1 den fazla consumer(tüketici) olabilir
import { ThemeContext } from "../App";

export default function HookUseContext() {
  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <div style={theme}>
      <div>
        <p>
          Yukarıdaki örnekte, ikinci argüman olarak [count] u iletiyoruz. Peki
          bu ne anlama geliyor? count eğer 5 ise ve daha sonra bileşenimiz count
          hala 5 e eşit olacak şekilde yeniden oluşturulursa, React önceki
          render daki [5] ile sonraki render daki [5] ‘i karşılaştırır. Dizideki
          tüm öğeler aynı olduğundan (5 === 5), React efekti atlar.
          Gerçekleştirdiğimiz iyileştirme bu şekildedir. 6 olarak güncellenen
          count ile oluşturduğumuzda, React, önceki işlemedeki [5] dizisindeki
          öğeleri bir sonraki işlemedeki [6] dizisindeki öğelerle
          karşılaştıracaktır. Bu sefer React efekti yeniden uygulayacak çünkü 5
          !== 6. Dizide birden fazla öğe varsa, React, yalnızca biri farklı olsa
          bile efekti yeniden çalıştıracaktır.
        </p>
      </div>
    </div>
  );
}
