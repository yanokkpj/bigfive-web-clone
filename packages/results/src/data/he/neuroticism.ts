import { type TemplateDomain } from '../../types'

const neuroticism: TemplateDomain = {
  domain: 'N',
  title: 'נוירוטיזם',
  shortDescription: 'נוירוטיזם מתייחס לנטייה לחוות רגשות שליליים.',
  description: `פרויד השתמש במקור במונח נוירוזה כדי לתאר א
מצב המסומן במצוקה נפשית, סבל נפשי ו
חוסר היכולת להתמודד בצורה יעילה עם הדרישות הרגילות של החיים. הוא
הציע שכולם יראו סימנים של נוירוזה, אבל זה אנחנו
שונים במידת הסבל שלנו ואת הסימפטומים הספציפיים שלנו
מְצוּקָה. היום נוירוטיזם מתייחס לנטייה לחוות
רגשות שליליים. <br /> <br /> אלה אשר ניקוד גבוה על נוירוטיות עשוי
ניסיון בעיקר תחושה שלילית ספציפית כגון חרדה,
כעס או דיכאון, אך סביר שהם יחוו כמה מהם
רגשות. <br /> <br /> אנשים בעלי רמות גבוהות של נוירוטיות הם תגובה רגשית. הֵם
להגיב רגשית לאירועים שלא ישפיעו על רוב האנשים, ו
התגובות שלהם נוטות להיות אינטנסיביות יותר מהרגיל. הם יותר
סביר לפרש מצבים רגילים כמאיימים, וקטנים
התסכולים קשים עד כדי תקווה. <br /> <br /> הרגשות השליליים שלהם
התגובות נוטות להתעקש על תקופות זמן ארוכות במיוחד, אשר
כלומר, הם במצב רוח רע. בעיות אלה רגשית
הרגולציה יכולה להפחית את יכולתו של הנוירוטי לחשוב בבהירות
החלטות, להתמודד בצורה יעילה עם מתח`,
  results: [
    {
      score: 'low',
      text: `הציון שלך על נוירוטיזם הוא נמוך, המציין כי אתה
רגוע באופן יוצא דופן, מורכב ולא ניתן להחלפה. אתה לא מגיב
רגשות עזים, אפילו למצבים שרוב האנשים יתארו
מלחיץ.`
    },
    {
      score: 'neutral',
      text: `הציון שלך על נוירוטיזם הוא ממוצע, המציין כי רמת שלך
תגובתיות רגשית אופיינית לכלל האוכלוסייה.
מצבים מלחיצים ומתסכלים מרגיזים אותך במקצת,
אבל בדרך כלל אפשר להתגבר על הרגשות האלה ולהתמודד אתם
במצבים אלה.`
    },
    {
      score: 'high',
      text: `הציון שלך על נוירוטיזם הוא גבוה, המציין כי אתה בקלות
נסער, אפילו על ידי מה שרוב האנשים רואים את הדרישות הרגילות של
חַי. אנשים חושבים שאתה רגיש ורגשי.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'חרדה',
      text: `מערכת "להילחם או הטיסה" של המוח של חרדה
אנשים הוא קל מדי לעתים קרובות מדי עוסקת. לכן, אנשים אשר
הם גבוהים חרדה לעתים קרובות מרגיש כמו משהו מסוכן עומד לקרות.
הם עלולים לפחד ממצבים ספציפיים או להיות פשוט חוששים בדרך כלל.
הם מרגישים מתוחים, עצבניים ועצבניים. אנשים עם חרדה נמוכה הם בדרך כלל
רגוע וחסר פחד.`
    },
    {
      facet: 2,
      title: 'כעס',
      text: `אנשים שמקבלים ציון גבוה באנגר מרגישים זועמים מתי
דברים לא הולכים בדרכם. הם רגישים כלפי טיפול הוגן
ומרגישים טינה ומרירות כאשר הם מרגישים שמרמים אותם.
סולם זה מודד את הנטייה להרגיש כעס; בין אם
אדם מבטא מטרד ועוינות תלוי של הפרט
רמה על הסכמה. ציון נמוך לא מתרגזים לעתים קרובות או בקלות.`
    },
    {
      facet: 3,
      title: 'דכאונות',
      text: `סולם זה מודד את הנטייה להרגיש עצובים, מדוכאים,
ו להרתיע. ניקוד גבוה חסר אנרגיה וקשה ליזום
פעילויות. ציון נמוך נוטים להיות חופשיים מן הרגשות האלה דיכאוניים.`
    },
    {
      facet: 4,
      title: 'מודעות עצמיץ',
      text: `אנשים בעלי מודעות עצמית רגישים
על מה שאחרים חושבים עליהם. החשש שלהם לגבי דחייה ו
ללעג לגרום להם להרגיש ביישן ולא נוח בשפע אחרים. הֵם
מתביישים בקלות ולעתים קרובות מתביישים. הפחדים שלהם כי אחרים
יבקרו או יגחקו עליהם מוגזמים ולא מציאותיים, אבל
חוסר הנוחות והאי-נוחות עלולים להפוך את הפחדים האלה להגשמה עצמית
נְבוּאָה. לעומת זאת, קלעים נמוכים אינם סובלים מהטעות
הרושם שכולם צופים ושופטים אותם. הם לא מרגישים
עצבני במצבים חברתיים.`
    },
    {
      facet: 5,
      title: 'אימפרציה',
      text: `אנשים חסרי תחושה חשים תשוקה עזה
דוחק כי הם מתקשים להתנגד. הם נוטים להיות
מכוונת לתענוגות קצרי טווח ולתגמולים ולא לטווח ארוך,
לטווח הארוך. קלעים נמוכים לא חווים  חזק, שאין לעמוד בפניו
התשוקה ולכן אינם מוצאים עצמם מתפתים להתרברב.`
    },
    {
      facet: 6,
      title: 'פגיעות',
      text: `ציון גבוה על חוויית הפגיעות
פאניקה, בלבול וחוסר אונים בעת לחץ או לחץ.
מקלטים נמוכים מרגישים יותר שקולים, בטוחים וחושבים בהירה
לחוץ.`
    }
  ]
}

export default neuroticism
