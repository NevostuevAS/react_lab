// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useState, useRef, useEffect } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);

  // Создаем массив ref'ов длины catList. Каждый ref для картинки
  const refs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Получаем DOM-узел активной картинки
    const node = refs.current[index];
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [index]); // Запускаем при каждом изменении active index

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }}
        >
          Next
        </button>
      </nav>
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <ul style={{ display: 'flex', padding: 0, margin: 0, listStyle: 'none' }}>
          {catList.map((cat, i) => (
            <li key={cat.id} style={{ margin: '0 8px' }}>
              <img
                ref={el => (refs.current[i] = el)}
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
                style={{
                  display: 'inline-block',
                  width: 100,
                  height: 100,
                  objectFit: 'cover',
                  border: index === i ? '2px solid blue' : '2px solid transparent',
                  borderRadius: 4,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
};

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`,
  });
}

