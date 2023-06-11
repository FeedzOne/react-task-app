export const Footer = () => {
  return (
    <div class="footer">
      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-feedz border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-feedz-dark dark:border-gray-600">
        <span class="text-sm text-gray-black sm:text-center dark:text-white">
          © 2023{" "}
          <a href="https://github.com/FeedzOne" class="hover:underline" target="_blank">
            FeedzOne™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-white sm:mt-0">
          <li className="mr-4 hover:underline md:mr-6">
            <p>Contact Email: feedzone.contacto@gmail.com</p>
          </li>
          <li>
            <a href="https://www.facebook.com/feedzonetv/" className="mr-4 hover:underline md:mr-6" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/feedz_one/"
              className="mr-4 hover:underline md:mr-6"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/FeedzOneTV" className="hover:underline" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
