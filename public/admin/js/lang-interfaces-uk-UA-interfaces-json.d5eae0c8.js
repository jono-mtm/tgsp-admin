(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-interfaces-uk-UA-interfaces-json"],{"54de":function(e){e.exports=JSON.parse('{"interfaces":{"2fa-secret":{"2fa-secret":"Пароль 2FA"},"button-group":{"button_group":"Група кнопок","choices":"Варіанти","choices_comment":"Введіть JSON. Ключі будуть використовуватися як значення для збереження.","theme":"Тема інтерфейсу","theme_comment":"Оберіть тему інтерфейсу, якщо вона підтримується","value":"Значення","flight":"Політ","cruise":"Cruise","run":"Запустити","bus":"Автобус","bike":"Велосипед","train":"Поїзд","car":"Автомобіль","other":"Інше"},"calendar":{"calendar":"Календар","min":"Мінімальна дата","min_comment":"Мінімальна дата, яку користувач може обрати","max":"Максимальна дата","max_comment":"Максимальна дата, яку користувач може обрати","formatting":"Формат дати","formatting_comment":"Дотримується [Стандарту Unicode](https://date-fns.org/v2.8.1/docs/format). Якщо залишити порожнім, використовуватиметься відносна дата."},"checkboxes":{"checkboxes":"Прапорці","choices":"Варіанти","choices_comment":"Введіть JSON. Ключі будуть використовуватися як значення для збереження.","wrap":"Перенос по роздільнику","wrap_comment":"Wrap the saved value in a delimiter (improves searchability).","formatting":"Показати текст відображення","formatting_comment":"Render the values as the display values","display_text":"Display Text","value":"Значення","option":"Опція","single":"Один стовпець","single_comment":"Показувати прапорці в одному стовпці","draggable":"Draggable Checkboxes","draggable_comment":"Enable sorting by draggable checkboxes","allow_other":"Allow Other","allow_other_comment":"Allow an additional custom option"},"checkboxes-relational":{"checkboxes_relational":"Checkboxes Relational","grid":"Таблиця","grid_comment":"Кількість елементів для показу у рядку","item_template":"Шаблон елемента","item_template_comment":"How to display values on the single item layouts","item_template_placeholder":"{{name}} — {{first_name}}","listing_template":"Listing Template","listing_template_comment":"How to display values on the listing layouts.<br>You\'ll need to prepend the collection name","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"Код","template":"Шаблон","template_comment":"Зробіть шаблон, з якого користувач зміг би почати","language":"Мова","language_comment":"Встановити мову програмування","lineNumber":"Номери рядків","lineNumber_comment":"Показувати номери рядків","loc":"No lines of {lang} | One line of {lang} | {count} lines of {lang}","fill_template":"Fill with Template"},"collections":{"collections":"Колекції","placeholder":"Заповнювач","placeholder_comment":"Static text that shown before a value is selected","placeholder_default":"Оберіть колекцію...","option":"Опція","include_system":"Include System","include_system_comment":"Include system collections in the options"},"color":{"color":"Колір","format":"Формат виводу","format_comment":"У якому форматі зберігати значення","palette":"Палітра","palette_comment":"Add color options as hex values","palette_only":"Тільки палітра","palette_only_comment":"Дозволити користувачеві обрати тільки з палітри"},"color-palette":{"color-picker":"Color Picker"},"date":{"date":"Дата","min":"Мінімальна дата","min_comment":"Мінімальна дата, яку користувач може обрати","max":"Максимальна дата","max_comment":"Максимальна дата, яку користувач може обрати","localized":"Локалізувати","localized_comment":"Локалізувати дату при виводі","relative":"Show relative date","relative_comment":"Показувати відносні дати (наприклад: 2 дні тому)","icon_left":"Значок ліворуч","icon_left_comment":"Виберіть значок для відображення ліворуч від вводу","icon_right":"Значок праворуч","icon_right_comment":"Виберіть значок для відображення праворуч від вводу"},"datetime":{"datetime":"Дата й час","min":"Мінімальний час","min_comment":"Мінімальний час, який користувач може обрати","max":"Максимальний час","max_comment":"Максимальний час, який користувач може обрати","localized":"Локалізувати","localized_comment":"Локалізувати дату при виводі","relative":"Показати відносний час","relative_comment":"Показувати відносний час (наприклад: 50 хвилин тому)","icon_left":"Значок ліворуч","icon_left_comment":"Виберіть значок для відображення ліворуч від вводу","icon_right":"Значок праворуч","icon_right_comment":"Виберіть значок для відображення праворуч від вводу","utc":"Зберегти як UTC","utc_comment":"Save to and display from UTC","default_to_current_datetime":"Default to current datetime","default_to_current_datetime_comment":"Sets the default value to current datetime","format":"Формат","format_comment":"The DateTime format to use for the input"},"datetime-created":{"datetime_created":"Datetime Created","relative":"Показати відносний час","relative_comment":"Показувати відносний час (наприклад: 50 хвилин тому)","now":"You are creating this now","unknown":"Невідомо"},"datetime-updated":{"datetime_updated":"Datetime Updated","relative":"Показати відносний час","relative_comment":"Показувати відносний час (наприклад: 50 хвилин тому)","now":"You are creating this now","unknown":"Невідомо"},"divider":{"divider":"Розділювач","style-name":"Стиль розділювача","style-comment":"Зміна стилю розділювача","weight-name":"Товщина лінії","weight-comment":"Зміна товщини лінії","input-name":"Текст розділювача","input-comment":"Введіть текст тут","desc-name":"Опис розділювача","desc-comment":"Додайте опис тут","hr-name":"Горизонтальна лінія (HR)","hr-comment":"Показувати горизонтальну лінію?","margin-name":"Додатковий відступ","margin-comment":"Додати відступ над інтерфейсом"},"dropdown":{"dropdown":"Випадаюче меню","choices":"Варіанти","choices_comment":"Введіть JSON. Ключі будуть використовуватися як значення для збереження.","placeholder":"Заповнювач","placeholder_comment":"Static text that shown before a value is selected","option":"Опція","formatting":"Показати текст відображення","formatting_comment":"Render the values as the display values","placeholder_default":"Оберіть варіант...","icon":"Іконка","icon_comment":"Виберіть значок для відображення ліворуч від вводу","options_invalid":"JSON параметри для випадаючого списку недійсні:","allow_other":"Allow Other","allow_other_comment":"Дозволити користувачеві додавати власне значення"},"file":{"file":"Файл","view_type":"Тип перегляду","view_type_comment":"Виберіть спосіб перегляду файлів","view_options":"Опції перегляду","view_options_comment":"Встановіть опції перегляду для файлів","view_query":"View Query","view_query_comment":"Set the view query to use for the files","filters":"Фільтри","filters_comment":"Які фільтри слід використовувати","accept":"Допустимі типи файлів","accept_comment":"Перелік MIME типів, які можна завантажити","allow_delete":"Дозволити видалення","allow_delete_comment":"Дозволяти користувачеві остаточно видалити файл через файловий інтерфейс","crop_preview":"Обрізувати для попереднього перегляду","crop_preview_comment":"Файл буде обрізано для попереднього перегляду, щоб заповнити доступний простір."},"file-preview":{"file_preview":"Перегляд файлу","edit":"Параметри редагування"},"file-size":{"file_size":"Розмір файлу","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","format":"Формат значення","format_comment":"Show the value in a human readable way (e.g. 10MB)","format_input":"Format input","format_input_comment":"Enter the value using a dropdown for units","decimal":"Десятки","decimal_comment":"Показувати значення у десятковому підрахунку (10 Мб проти 10Міб)","crop_preview":"Обрізувати зображення попереднього перегляду"},"files":{"files":"Файли","visible_columns":"Видимі стовпці","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relation_not_setup":"The relationship hasn\'t been configured correctly","template":"Display Template","template_comment":"Виберіть спосіб відображення","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Allow Create","allow_create_comment":"Дозволяти користувачеві створювати новий елемент з цього інтерфейсу","allow_select":"Allow Select","allow_select_comment":"Дозволяти користувачеві обирати існуючий елемент","accept":"Допустимі типи файлів","accept_comment":"Перелік MIME типів, які можна завантажити","edit_item":"Edit"},"hashed":{"hashed":"Hashed","hide":"Hide Value","hide_comment":"Display dots instead of the characters you enter","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","show_hash":"Show the hashed output","show_hash_comment":"Display the saved hash","hashing_type":"Hashing Type","hashing_type_comment":"What method of hashing to use","width":"Розмір","width_comment":"Set what width to use for the input","auto":"Automatic","small":"Малий","medium":"Середній","large":"Великий","secured":"Value Secured"},"icon":{"icon":"Іконка","search_placeholder":"Шукати значок..."},"interface-options":{"interface-options":"Interface Options","interface-field":"Interface Field","placeholder-comment":"The field that holds the name of the interface","placeholder-default":"Введіть назву поля..."},"interface-types":{"interface-types":"Interface types","interface-field":"Interface Field","placeholder-comment":"The field that holds the name of the interface","placeholder-default":"Введіть назву поля..."},"interfaces":{"interfaces":"Інтерфейси","placeholder":"Заповнювач","placeholder_comment":"Static text that shown before a value is selected","placeholder_default":"Choose an interface","option":"Опція","relational":"Include relational interfaces","include_status":"Include the status interfaces"},"json":{"template":"Шаблон","template_comment":"Зробіть шаблон, з якого користувач зміг би почати"},"key-value":{"key_interface":"Key Interface","key_data_type":"Key Data Type","key_options":"Key Interface Options","value_interface":"Key Interface","value_data_type":"Key Data Type","value_options":"Key Interface Options"},"language":{"input":"Мова","select_language":"Select a language...","limit":"Limit to Directus Availability","limit_comment":"Only show languages that are available as translations in Directus"},"many-to-many":{"m2m":"Many to Many","visible_columns":"Видимі стовпці","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relation_not_setup":"The relationship hasn\'t been configured correctly","template":"Display Template","template_comment":"Виберіть спосіб відображення","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Allow Create","allow_create_comment":"Дозволяти користувачеві створювати новий елемент з цього інтерфейсу","allow_select":"Allow Select","allow_select_comment":"Дозволяти користувачеві обирати існуючий елемент"},"many-to-one":{"m2o":"Багато до одного","template":"Шаблон випадаючого списку","template_comment":"Як форматувати випадаючий список","visible_fields":"Видимі поля","visible_fields_placeholder":"title,author","visible_fields_note":"CSV of fields visible when selecting an item in the modal","template_placeholder":"{{title}} — {{author}}","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relationship_not_setup":"The relationship hasn\'t been configured correctly","icon":"Іконка","icon_comment":"Виберіть значок для відображення ліворуч від вводу","select_one":"Вибір","threshold":"Поріг","threshold_comment":"Кількість елементів, після яких замість випадаючого списку буде використовуватися діалог"},"map":{"map":"Карта","choices":"варіанти","choices_comment":"Введіть JSON. Ключі будуть використовуватися як значення для збереження.","theme":"Тема інтерфейсу","theme_comment":"Оберіть тему інтерфейсу, якщо вона підтримується","value":"Значення","map_lat":"Default Latitude","map_lat_comment":"Map will be centered at this latitude","map_lng":"Default Longitude","map_lng_comment":"Map will be centered at this longitude","height":"Висота","default_zoom":"Default Zoom","default_zoom_comment":"Default zoom level of the map","max_zoom":"Max Zoom","max_zoom_comment":"Maximum zoom allowed in the map","no_location":"No location found","user_location_error_blocked":"You\'ve disabled the location access. Kindly enable it from the browser addressbar to auto detect your location.","user_location_error":"There was an error while trying to get your location. Please try again.","address_to_code":"Address Input","address_to_code_comment":"Add an input field to automatically get the geocodes from an address. Uses <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>. Please check their usage policy.","address_to_code_error":"No geocode found for this address","clear_location":"Clear Location","my_location":"Set My Location","address_location":"Set Address Location"},"markdown":{"markdown":"Markdown","edit":"Edit","preview":"Preview","tabbed_preview":"Tabbed Preview","tabbed_preview_comment":"How to display the editor and preview","tabbed_preview_on":"Tabbed Preview","tabbed_preview_off":"Side-by-side Preview","rows":"Рядки","rows_comment":"The starting number of text rows available","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача"},"multiselect":{"multiselect":"Множинний вибір","choices":"Варіанти","choices_comment":"Enter JSON key value pairs with the saved value and displayed text","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","size":"Розмір","size_comment":"Number of options visible before scrolling","option":"Опція","wrap":"Перенос по роздільнику","wrap_comment":"Wrap the values with a pair of delimiters to allow strict searching for a single value","format":"Browse Format","format_comment":"The output format on the Browse Items page"},"numeric":{"numeric":"Цифровий","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","localized":"Локалізувати","localized_comment":"Локалізувати відповідно до мови користувача","icon_left":"Значок ліворуч","icon_left_comment":"Виберіть значок для відображення ліворуч від вводу","icon_right":"Значок праворуч","icon_right_comment":"Виберіть значок для відображення праворуч від вводу","monospace":"Моноширинний шрифт","monospace_comment":"Використовувати моноширинний шрифт"},"one-to-many":{"o2m":"Один до багатьох","select_items":"Select the items","relation_not_setup":"The relationship hasn\'t been configured correctly","visible_columns":"Видимі стовпці","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","template":"Display Template","template_comment":"How to format value on the item browse display","template_placeholder":"{{title}} — {{author}}","allow_create":"Allow Create","allow_create_comment":"Дозволяти користувачеві створювати новий елемент з цього інтерфейсу","allow_select":"Allow Select","allow_select_comment":"Дозволяти користувачеві обирати існуючий елемент","delete_mode":"Delete mode","delete_mode_comment":"Що робити, коли користувач знімає вибір з елементу","sort_field":"Sort Field","sort_field_comment":"The field to store the sort value in"},"password":{"password":"Пароль","hide":"Hide Value","hide_comment":"Display dots instead of the characters you enter","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","confirm_placeholder":"Confirm password...","show_hash":"Show the hashed output","show_hash_comment":"Display the saved hash","hashing_type":"Hashing Type","hashing_type_comment":"What method of hashing to use"},"preview":{"preview":"Preview","url_template":"URL Template","url_template_comment":"A mustache template for a URL to preview content","preview_item":"Preview this item"},"primary-key":{"primary_key":"Первинний ключ","immutable":"Can not be changed","monospace":"Моноширинний шрифт","monospace_comment":"Використовувати моноширинний шрифт"},"radio-buttons":{"radio":"Radio Buttons","choices":"Варіанти","choices_comment":"Введіть JSON. Ключі будуть використовуватися як значення для збереження.","option":"Опція","format":"Browse Format","format_comment":"The output format on the Browse Items page"},"rating":{"rating":"Rating","value":"Значення","active_color":"Active Color","active_color_comment":"Active color of selected stars","max_stars":"Max Stars","max_stars_comment":"Number of maximum rating allowed","display":"Display","display_comment":"How to display rating values"},"repeater":{"repeater":"Repeater","template":"Display Template","template_comment":"How to format value on the item browse display and inline preview","template_placeholder":"{{title}} — ({{author}})","fields":"Поля","fields_comment":"What fields to show in each repeated row","limit":"Limit","limit_comment":"Максимальна кількість рядків, які може додавати користувач","duplicable":"Duplicable rows","duplicable_comment":"Whether to make rows duplicable or not","structure":"Structure","structure_comment":"Whether to save the JSON as an array of objects or single object with unique keys","structure_key":"Structure Key Field","structure_key_comment":"When using an object for the JSON structure, this value controls what field to use for the key values","placeholder":"Заповнювач","placeholder_comment":"The value that shows up instead of the template if there\'s no value entered yet","create_item_text":"Create Item Text","create_item_text_comment":"Text that\'s displayed in the button that adds a new row to the repeater"},"slider":{"slider":"Slider","min":"Мінімум","min_comment":"Мінімальне дійсне значення","max":"Максимум","max_comment":"Максимальне допустиме значення","step":"Крок","step_comment":"Крок, з яким можна встановлювати значення","unit":"Одиниця","unit_comment":"Показати одиниці поруч зі значенням слайдера, наприклад: 15 фунтів"},"slug":{"slug":"Slug","placeholder_name":"Заповнювач","placeholder_comment":"The placeholder text to show","force_lowercase":"Примусовий нижній регістр","force_lowercase_comment":"Makes sure the slug is in lowercase","mirrored_field":"Mirrored Field","mirrored_field_comment":"Keep the slug up to date with another (text) field","only_on_create":"Only on Create","only_on_create_comment":"Allow the slug to be edited only when creating a new item"},"sort":{"sort":"Сортування"},"status":{"status":"Статус","status_mapping":"Налаштування станів","status_mapping_comment":"Налаштування станів у форматі JSON","simple_badge":"Simple Badge","simple_badge_comment":"Displays a colored dot on the item listing page.","published":"Опубліковано","under_review":"Розглядається","draft":"Чернетка","deleted":"Видалено"},"tags":{"tags":"Теги","alphabetize":"Alphabetize tags","alphabetize_comment":"Will rearrange tags to be alphabetical","lowercase":"Примусовий нижній регістр","lowercase_comment":"Перетворити всі теґи в нижній регістр","wrap":"Перенос по роздільнику","wrap_comment":"Wrap the values with a pair of delimiters to allow strict searching for a single value","format":"Format Value","format_comment":"Convert the tags to Title Case when displaying the value","sanitize":"Санітувати","sanitize_comment":"Будь-які небуквено-цифрові символи будуть видалятися а пробіли бадуть замінені на дефіси","placeholder_text":"Type a tag and then hit enter or comma...","icon_left":"Значок ліворуч","icon_left_comment":"Виберіть значок для відображення ліворуч від вводу","icon_right":"Значок праворуч","icon_right_comment":"Виберіть значок для відображення праворуч від вводу","validation":"Валідація","validation_comment":"A RegEx to check each individual value against","validation_message":"Validation Message","validation_message_comment":"Коротке повідомлення що покажеться користувачеві, якщо перевірка мітки буде невдалою","validation_message_default":"Please enter a valid tag"},"text-input":{"input":"Текстове поле","placeholder":"Заповнювач","trim":"Обрізувати пробіли","trim_comment":"Обрізати пробіли на початку на в кінці тексту перед збереженням","char_count":"Показувати кількість символів","char_count_comment":"Показувати скільки символів залишається","icon_left":"Значок ліворуч","icon_left_comment":"Виберіть значок для відображення ліворуч від вводу","icon_right":"Значок праворуч","icon_right_comment":"Виберіть значок для відображення праворуч від вводу","format":"Гарний вивід","format_comment":"Конвертувати у великі букви","monospace":"Моноширинний шрифт","monospace_comment":"Використовувати моноширинний шрифт","auto":"Automatic","small":"Малий","medium":"Середній","large":"Великий"},"textarea":{"textarea":"Текстова область","rows":"Рядки","rows_comment":"Скільки рядків показувати перед тим, як з\'явиться прокрутка","placeholder":"Заповнювач","placeholder_comment":"Введіть текст заповнювача","serif":"Шрифт Serif","serif_comment":"Використовувати більший serif шрифт"},"time":{"time":"Час","include_seconds":"Include seconds","include_seconds_comment":"Include seconds in the interface","24hour":"Display 24 hour clock","24hour_comment":"Show the time in 24-hour format (eg.: 15:30)"},"switch":{"switch":"Перемикач","label_on":"Текст (увімк.)","label_on_comment":"Текст, що відображається при увімкненому перемикачі","label_off":"Текст (вимк.)","label_off_comment":"Текст, що відображається при вимкненому перемикачі","checkbox":"Відображати як прапорець","checkbox_comment":"Display a checkbox instead of the default switch"},"toggle-icon":{"toggle-icon":"Значок-перемикач","text-inactive-name":"Текст, коли неактивно","text-inactive-comment":"Текст біля неактивного значка","text-inactive-placeholder":"Введіть текст тут","icon-inactive-name":"Неактивний значок","icon-inactive-comment":"Виберіть неактивний значок","color-inactive-name":"Колір, коли неактивно","color-inactive-comment":"Виберіть колір, коли неактивно","text-active-name":"Текст, коли активно","text-active-comment":"Текст біля активного значка","text-active-placeholder":"Введіть текст тут","icon-active-name":"Значок, коли активно","icon-active-comment":"Виберіть значок, коли активно","color-active-name":"Active Color","color-active-comment":"Виберіть активний значок"},"translation":{"translation":"Переклад","language_field":"Поле мови","language_field_comment":"Поле, що містить код мови у пов\'язаній колекції","languages":"Мови","template":"Display Template","template_comment":"Виберіть спосіб відображення","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"Користувач","avatar":"Аватар","name":"Назва","template":"Шаблон","template_comment":"Як форматувати користувачів у випадаючому меню","placeholder":"Заповнювач","placeholder_comment":"Додати заповнювач"},"owner":{"owner":"Власник","avatar":"Аватар","name":"Назва","template":"Шаблон","template_comment":"Як відображати користувача на сторінці детального перегляду","display":"Display","display_comment":"How to display the user on the item browse page","you":"You will be the creator","unknown":"Невідомо"},"user-roles":{"user-roles":"Роль користувача","choose_role":"Choose a role...","relational":"Реляційний","relational_comment":"Save as a relational record","show_public":"Show public role"},"user-updated":{"user_updated":"Користувача оновлено","avatar":"Аватар","name":"Назва","template":"Шаблон","template_comment":"Як відображати користувача на сторінці детального перегляду","display":"Display","display_comment":"How to display the user on the item browse page","you":"You will be the updater","unknown":"Невідомо"},"wysiwyg":{"toolbar":"Кнопки панелі інструментів","toolbar_comment":"Увімкніть, вимкніть чи змінюйте порядок кнопок в панелі інструментів","custom_formats":"Власне форматування","custom_formats_comment":"HTML обгортка для вмісту поля","tinymce_options":"Параметри TinyMCE","tinymce_options_comment":"Редагування [параметрів TinyMCE](https://www.tiny.cloud/docs/configure/)."}}}')}}]);
//# sourceMappingURL=lang-interfaces-uk-UA-interfaces-json.d5eae0c8.js.map