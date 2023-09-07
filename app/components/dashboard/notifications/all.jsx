import Link from "next/link"
const AllNote = () => {
  return (
    <>
      <div class="style_fn_notifications_page">
        <div class="style_fn_pagetitle">
          <h2 class="title">Notifications</h2>
        </div>

        <div class="style_fn_notifications_content">
          <div class="container small">
            <div class="style_fn_notifications_list">
              <div class="notification__item">
                <Link
                  href="/notify/single"
                  class="fn__full_link"></Link>
                <h2 class="item__title">
                  Version 4.1.2 has been released
                </h2>
                <span class="item__date">May 25, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNote;
