import { notFound } from "next/navigation";

/**
 * The apex is intentionally a 404.
 *
 * The portfolio has no general home page: the same projects are presented three
 * times, once per role, and merging them would misrepresent the work. The
 * `not-found` page offers the three versioned routes instead.
 */
export default function Page() {
  notFound();
}
